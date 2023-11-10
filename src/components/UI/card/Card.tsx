import { useSelector } from "react-redux";
import getUserInformation from "../../../api/firebase/user/userInfo/getUserInformation";
import { ISignUp } from "../../auth/register/types";
import { useEffect, useState } from "react";
import { IUserBalance } from "../../../store/reducers/types";
import UserBalance from "./UserBalance";
import Loading from "../../common/loading/Loading";

const Card = () => {
  const [userData, setUserData] = useState<ISignUp>();
  const fetchUserBalanceData = UserBalance();
  const userInfo = async () => {
    const fetchUserInfo = await getUserInformation();
    setUserData(fetchUserInfo);
  };
  const { balance } = useSelector(
    (store: any) => store.userBalance as IUserBalance
  );

  const currentDate = () => {
    const date = new Date();
    // const day = date.getDate().toString().padStart(2, "0");
    // const month = (date.getMonth() + 1).toString().padStart(2, "0");
    // const year = date.getFullYear().toString();
    // const formattedDate = `${day}/${month}/${year}`;\
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  const randomDigit = () => {
    let digitArray = [];
    for (let i = 0; i < 16; i++) {
      const getRandomDigit = Math.floor(Math.random() * 10);
      digitArray.push(getRandomDigit);
      if ((i + 1) % 4 === 0) {
        digitArray.push(" ");
      }
    }
    return digitArray;
  };
  useEffect(() => {
    userInfo();
  }, []);
  return (
    <>
      <div className="col col-lg-6 col-md-8 rounded-5 p-2 p-sm-3 shadow">
        <div className="">
          {fetchUserBalanceData ? <>{<Loading />}</> : <></>}
          <h4 className="text-dark ms-3 mb-0">Card</h4>
          <div className="row py-3">
            <div className="col-8 border-end d-flex justify-content-center align-items-center px-4">
              <div className="bg-custom shadow w-100 rounded-5 text-white">
                <div className="p-3 p-sm-4">
                  <h5 className="font-Quicksand-SemiBold mb-0 ">cloudcash</h5>

                  <p className="fs--1 text-white-50">PREMIUM ACCOUNT</p>

                  <div className="w-100 d-flex justify-content-center ">
                    <div className="typing-demo fs-5 py-3">{randomDigit()}</div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <span className="fs--2 text-white-50 font-Quicksand-Medium">
                        Card holder
                      </span>
                      <span className="fs--1 font-Quicksand-Medium">
                        {userData?.email}
                      </span>
                    </div>
                    <div className="d-flex flex-column justify-content-evenly">
                      <span className="fs--2 text-white-50 font-Quicksand-Medium">
                        Current date
                      </span>
                      <span className="fs--2 font-Quicksand-Medium">
                        {currentDate()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 ps-0  text-end d-flex flex-column gap-3">
              <div className=" d-flex flex-column">
                <span className="font-Quicksand-SemiBold fs-2 text-primary">
                  $ {balance?.currentBalance}
                </span>
                <span className="font-Quicksand-SemiBold text-black-50 fs--1">
                  Current balance
                </span>
              </div>
              <div className=" d-flex flex-column ">
                <span className="font-Quicksand-SemiBold fs-4 text-success">
                  $ {balance?.incomingBalance}
                </span>
                <span className="font-Quicksand-SemiBold text-black-50 fs--1">
                  Income balance
                </span>
              </div>
              <div className=" d-flex flex-column ">
                <span className="font-Quicksand-SemiBold fs-4 text-danger">
                  ${balance?.outcomingBalance}
                </span>
                <span className="font-Quicksand-SemiBold text-black-50 fs--1">
                  Outcome balance
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 ms-3 col-auto col-xl-7">
            <div className=" progress " aria-valuemin={0} aria-valuemax={100}>
              <div
                className="progress-bar"
                style={{ width: "25%", backgroundColor: "#7e4cd7d9" }}
              ></div>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <span className="font-Quicksand-SemiBold text-black-50">
                Weekly payment limit
              </span>
              <span>$350 / $4000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
