const Card = () => {
  return (
    <>
      <div className="col col-xl-6 rounded-5 p-2 p-sm-3 shadow">
        <div className="">
          <h4 className="text-dark ms-3 mb-0">Cards</h4>
          <div className="row py-4">
            <div className="col-8 border-end d-flex justify-content-center align-items-center px-4">
              {/* <CardSVG id="ArrowLeft" /> */}
              <div className="bg-custom shadow w-100 rounded-5 text-white">
                <div className="p-1 p-sm-4">
                  <h5 className="mb-0">cloudcash</h5>

                  <p style={{ fontSize: "10px" }} className="text-white-50">
                    RPEMIUM ACCOUNT
                  </p>

                  <div className="w-100 d-flex justify-content-around">
                    <p className="py-3 fs-5 ">5789</p>
                    <p className="py-3 fs-5 "> * * * * </p>
                    <p className="py-3 fs-5 "> * * * * </p>
                    <p className="py-3 fs-5 ">2857</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "10px" }}>Card holder</span>
                      <span>Name UserName</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "10px" }}>Expire date</span>
                      <span>06/23</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <CardSVG id="ArrowRight" /> */}
            </div>
            <div className="ps-0 col-4 text-end d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <span className="fs-2 text-primary">$ 2850.75</span>
                <span style={{ fontSize: "12px" }}>Current balance</span>
              </div>
              <div className="d-flex flex-column ">
                <span className="fs-4 text-success">$ 1500.50</span>
                <span style={{ fontSize: "12px" }}>Income balance</span>
              </div>
              <div className="d-flex flex-column ">
                <span className="fs-4 text-danger">$ 350</span>
                <span style={{ fontSize: "12px" }}>Outcome balance</span>
              </div>
            </div>
          </div>

          <div className="mt-2 ms-3 col-7 ">
            <div className=" progress " aria-valuemin={0} aria-valuemax={100}>
              <div
                className="progress-bar"
                style={{ width: "25%", backgroundColor: "#7e4cd7d9" }}
              ></div>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <span className="text-black-50">Weekly payment limit</span>
              <span>$350 / $4000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
