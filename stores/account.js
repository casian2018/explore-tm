export const useAccountStore = defineStore("account", () => {
  const connected = ref(undefined);
  const prefs = ref(undefined);
  const steps = ref(0);
  const loading = ref(true);
  const loadacc = ref(true);
  const ro = ref(false);

  function tempLoad(value, delay) {
    if (delay === undefined) delay = 100;
    loading.value = value;
    setTimeout(() => {
      loading.value = !value;
    }, delay);
  }

  function boolver(value) {
    if (typeof value === "string") {
      switch (value.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
        case null:
          return false;
        default:
          return Boolean(value);
      }
    } else {
      return Boolean(value);
    }
  }

  const checkSteps = () => {
    if (prefs.value === undefined) {
      setTimeout(checkSteps, 100);
      return;
    }
    loading.value = true;

    if (prefs.value.isRomanian === undefined) steps.value = 0;
    else {
      ro.value = boolver(prefs.value.isRomanian);
      if (prefs.value.firstTime === undefined) steps.value = 1;
      else if (prefs.value.attractions === undefined) steps.value = 2;
      else if (prefs.value.single === undefined) steps.value = 3;
      else if (prefs.value.activities === undefined) steps.value = 4;
      else if (prefs.value.budget === undefined) steps.value = 5;
      else if (prefs.value.time === undefined) steps.value = 6;
      else if (prefs.value.begin === undefined) steps.value = 7;
      else if (boolver(prefs.value.begin) === true) steps.value = 14;
    }

    loading.value = false;
  };

  const updateprefs = () => {
    //if(loading.value) return;
    useAccount()
      .prefs()
      .then((data) => {
        prefs.value = data;
        console.log(prefs.value);
        checkSteps();
      });
  };

  onMounted(() => {
    loadacc.value = true;
    useAccount()
      .connected()
      .then((data) => {
        console.log("connected", data);
        connected.value = data;
        updateprefs();
      })
      .finally(() => {
        setTimeout(() => {
          loadacc.value = false;
        }, 1000);
      });
  });

  return {
    loading,
    ro,
    connected,
    steps,
    checkSteps,
    prefs,
    updateprefs,
    tempLoad,
    loadacc,
  };
});
