import React, { useState, useEffect } from "react";

export default function Home() {
  let [totalItemList, setTotalItemList] = useState([]);

  async function getTotalItemList() {
    const result = await fetch("http://localhost:3001/api/v1/items");
    totalItemList = await result.json();
    setTotalItemList(totalItemList);
  }
  useEffect(() => {
    getTotalItemList();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container text-left align-items-left align-content-left">
          <h2>My Fridge List</h2>
          <hr id="hr1" align="left" className="hr-light"></hr>
        </div>

        <div className="container">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Items</th>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {totalItemList.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.date.split("").splice(0, 10).join("")}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  //<div className="App">hello</div>;
}
