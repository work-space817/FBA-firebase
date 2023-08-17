import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { firestore } from "./config";
import getUserId from "./getUserId";

const getGoalsData = async () => {
  const userId = getUserId();

  const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
  const querySnapshot = await getDocs(collection(userGoalsRef, "goal"));
  const goalsData = querySnapshot.docs;

  return goalsData;
};

export default getGoalsData;
