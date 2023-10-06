import React from "react";
import UserMenu from "./UserMenu";
import Pdetails from "./Pdetails";

const Pdash = () => {
  return (
    <div className="container marginStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-4">
            <h3 className="text-center">Welcome,USER NAME</h3>
            <Pdetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdash;
