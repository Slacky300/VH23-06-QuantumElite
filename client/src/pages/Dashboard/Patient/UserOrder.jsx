import axios from "axios";
import UserMenu from "./UserMenu";

const UserOrder = () => {
  return (
    <div className="container marginStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="col-md-12">
              <div className="container-fluid">
                <h1 className="text-start">My Orders</h1>
                <div className="row">
                  <div className="col-md-9 ">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="table-dark text-center">
                          <tr>
                            <th>SR.No</th>
                            <th>Vendor Name</th>
                            <th>Order Date</th>
                            <th>Delivered Date</th>
                            <th>Price</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>1</td>
                            <td>
                              <p className="fw-normal mb-1">sadadada</p>
                            </td>
                            <td>12/12/24</td>
                            <td>10:00 AM</td>
                            <td>rs 120</td>
                            <td>
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Bill details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body m-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SR no.</th>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>3</td>
                    <td>120</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-end">Total Price: 120</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserOrder;
