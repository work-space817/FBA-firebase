import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../config";
import { UserCredential, getIdToken } from "firebase/auth";
import setAuthToken from "../../../../helpers/functions/setAuthToken";
import { ISignUp } from "../../../../components/auth/register/types";

const setUserAuth = async (values: ISignUp, authResult: UserCredential) => {
  const { uid } = await setAuthToken(authResult);
  console.log("auth now exist");
  const additionalUserInformation = doc(firestore, "users", uid);
  const userAuth = await setDoc(additionalUserInformation, {
    ...values,
  });
};

export default setUserAuth;
