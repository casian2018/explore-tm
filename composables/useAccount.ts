import { ID } from "appwrite";

export const useAccount = () => {
  const client = useAppwrite();

    const registerUser = (email: string, password: string, name?: string) => {
      // Register User
      return client.account?.create(ID.unique(), email, password, name).then(
        (response) => {
          return { data: response, error: undefined };
        },
        (error) => {
          return { error, data: undefined };
        }
      );
    };

    const loginUser = (email: string, password: string) => {
      return client.account?.createEmailSession(email, password).then(
        (data) => {
          return { data: data, error: undefined };
        },
        (error) => {
          return { error: error, data: undefined };
        }
      );
    };

  /*const oauth = (provider: string) => {
    let link = "http://localhost:3000/"
    if(!process.server) link = window.location.href;
    client.account.createOAuth2Session(provider, link)

    //return loginUser("hnatiucdanielmc@gmail.com", "#mbd1414x")

  };*/

  const logoutUser = async () => {
    try {
      await client.account?.deleteSession("current");
      return { data: true };
    } catch (error) {
      return { error };
    }
  };

  const connected = async () => {
    let secure = undefined;
    try {
      const data = await useAppwrite().account.getSession("current");
      if (data !== undefined) secure = data;
      console.log(data);
    } catch {}
    return secure;
    //await new Promise(r => setTimeout(r, 1000));
    //return true;
  };

  return {
    currentUser: () => client.account?.get(),
    registerUser,
    loginUser,
    logoutUser,
    connected,
  };
};
