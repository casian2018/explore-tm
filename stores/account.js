export const useAccountStore = defineStore("account", () => {
  const connected = ref(undefined);

  onMounted(() => {
    useAccount()
    .connected()
    .then((data) => {
      console.log("connected", data);
      connected.value = data;
    });
  })

  return { connected };
});
