import { ID } from "appwrite";

export const useAccount = () => {
  const client = useAppwrite();

//   const registerUser = (email: string, password: string, name?: string) => {
//     // Register User
//     return client.account?.create(ID.unique(), email, password, name).then(
//       (response) => {
//         return { data: response, error: undefined };
//       },
//       (error) => {
//         return { error, data: undefined };
//       }
//     );
//   };

//   const loginUser = (email: string, password: string) => {
//     return client.account?.createEmailSession(email, password).then(
//       (data) => {
//         return { data: data, error: undefined };
//       },
//       (error) => {
//         return { error: error, data: undefined };
//       }
//     );
//   };

  const logoutUser = async () => {
    try {
      await client.account?.deleteSession("current");
      return { data: true };
    } catch (error) {
      return { error };
    }
  };

  const connected = async () => {
    let secure = false;
    try {
      const data = await useAppwrite().account.get();
      if (data !== undefined) secure = true;
    } catch {}
    return secure;
  };

  return {
    currentUser: () => client.account?.get(),
    //registerUser,
    //loginUser,
    logoutUser,
    connected,
  };
};
