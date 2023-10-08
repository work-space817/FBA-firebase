import { ITransaction } from "./../components/UI/transactions/types";
import { useEffect, useMemo, useState } from "react";
import {
  DocumentData,
  QuerySnapshot,
  getDocs,
  limit,
  query,
} from "firebase/firestore";

const usePagination = (
  currentPage: number,
  collectionName: Promise<QuerySnapshot<DocumentData>>,
  limitItem: number,
  totalCount: number
) => {
  // const [paginationData, setPaginationData] = useState<ITransaction[]>([]);
  // console.log("paginationData: ", paginationData);
  const pagination = async () => {
    const totalPage = Math.ceil(totalCount / limitItem);
    console.log(totalCount, limitItem);
    console.log("totalPage: ", totalPage);

    try {
      const collectionRef = await collectionName;
      const querySnapshot = query(collectionRef.query, limit(limitItem));
      const fetchPaginationItems = await getDocs(querySnapshot);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    pagination();
  }, [totalCount]);
};
export default usePagination;
