import React from "react";

const TransactionHistory = () => {
  return (
    <>
      <div className="col rounded-5 shadow">
        <div className="p-2 p-sm-3 ">
          <h4 className="text-dark ms-2">Transaction History</h4>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Reciever</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Some market</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">Some market</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">Some market</th>
                <td>Larry </td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Some market</th>
                <td> Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Some market</th>
                <td>Larry Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Some market</th>
                <td>twitter</td>
                <td>Larry </td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
