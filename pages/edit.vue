<template>
  <div class="">
    <p v-for="p in points">
      <span
        v-if="p.description === null"
        class="cursor-pointer"
        @click="generate(p)"
        >{{ p.name }},
      </span>
    </p>
  </div>
</template>

<script setup>
const store = useAccountStore();
import { Query } from "appwrite";
const points = ref(undefined);
const { chat } = useChatgpt();
const client = useAppwrite();

function refresh() {
  client.databases
    .listDocuments("655831ac4075d3f13cae", "655865878f6ee4aa1aeb", [
      Query.limit(500),
    ])
    .then((response) => {
      console.log("points", response);
      points.value = response.documents;
    });
}

onMounted(() => {
  refresh();
});

function generate(p) {
  chat(
    "Te rog sa gandesti o descriere la urmatorul obiectiv turistic, LOcatie: " +
      p.name +
      " gps: " +
      p.gps
  ).then((data) => {
    console.log(data);

    const promise = client.databases.updateDocument(
      "655831ac4075d3f13cae",
      "655865878f6ee4aa1aeb",
      p.$id,
      {
        "description": data,
      }
    );

    promise.then(
      function (response) {
        console.log(response);
        refresh();
      },
      function (error) {
        console.log(error);
      }
    );
  });
}
</script>
