import { UserCredential, getIdToken } from "firebase/auth";
import { auth } from "../../api/firebase/config";

const setAuthToken = async (authResult: UserCredential) => {
  const user = authResult.user;
  const userToken = (await getIdToken(user)) as string;
  const uid = auth.currentUser?.uid as string;
  if (userToken && uid) {
    localStorage.setItem("token", userToken);
    localStorage.setItem("uid", uid);
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
  return { userToken, uid };
};

export default setAuthToken;
