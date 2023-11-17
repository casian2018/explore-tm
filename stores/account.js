export const useAccountStore = defineStore("account", () => {
  const connected = ref(false);

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
