export const useStandStore = defineStore("stand", () => {

    const status = ref(false);
    const loading = ref(false);

    function open(){
        console.log("open");
        status.value = true;
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
        }, 7000)
    }

    function close(){
        console.log("close");
        status.value = false;
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
        }, 7000)
    }

    return { status, loading, open, close }

});