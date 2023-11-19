<script setup>
import inanim from "@/assets/in.mp4";
import outanim from "@/assets/out.mp4";
import inpng from "@/assets/in.png";
import outpng from "@/assets/out.png";
const stand = useStandStore();

const loading = ref(false);
const status = ref(false);

setInterval(() => {
    loading.value = stand.loading;
    status.value = stand.status;
    console.log(loading.value, status.value)
}, 500)

</script>

<template>
 
</template>
