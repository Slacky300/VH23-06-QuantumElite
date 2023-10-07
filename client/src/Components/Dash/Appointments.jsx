import React, { useEffect } from "react";
import { acceptOrRejectApt, getAppointMents } from "../../redux/Appointment/appointmentActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoggedinUser } from "../../redux/Auth/authActions";

const Appointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);
  const appointments = useSelector((state) => state?.appointment?.appointment);
  useEffect(() => {
    dispatch(getLoggedinUser());
  }, [dispatch]);

  const handleAcceptAppointment = (appointmentId) => {
    dispatch(acceptOrRejectApt({ appointmentId, status: 'approved' }))
  };

  const handleRejectAppointment = (appointmentId) => {
    dispatch(acceptOrRejectApt({ appointmentId, status: 'rejected' }))
  };

  const handleConnect = (id) => {
    navigate(`/room/${id}`)
  };

  const handlePatientDetails = (id) => {
    console.log("id", id);
  };

  useEffect(() => {
    console.log("User:", user); // Debugging statement

    if (user) {
      console.log("user.role", user?.role);

      console.log("User ID:", user?._id); // Debugging statement

      dispatch(getAppointMents(user?._id));

      if (user.role !== "doctor") {
        navigate("/");
      }
    }
  }, [user, navigate, dispatch]);


  if (appointments?.length === 0) {
    return (
      <>
        <h3 className="text-center">No appointments</h3>
      </>
    )
  }

  return (
    <div className="mt-3">
      <h2>UPCOMING APPOINTMENTS</h2>
      <div>
        <div className="px-4">
          <table className="table align-middle mb-0 bg-white ">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Details</th>
                <th>PRESCRIPTION</th>

              </tr>
            </thead>
            {appointments?.map((appointment, index) => (
              <>
                <tbody key={index}>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={
                            appointment?.patient?.photo ||
                            "https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png"
                          }
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">
                            {appointment?.patientId?.fullName}
                          </p>
                          <p className="text-muted mb-0">
                            {appointment?.patientId?.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">
                        {new Date(appointment?.date).toLocaleDateString()}
                      </p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{appointment?.time}</p>
                    </td>
                    <td>
                      {appointment?.status === "pending" && (
                        <>
                          <p>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() =>
                                handleAcceptAppointment(appointment?._id)
                              }
                            >
                              <i className="fas fa-check text-success"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() =>
                                handleRejectAppointment(appointment?._id)
                              }
                            >
                              <i className="fas fa-times text-danger"></i>
                            </button>
                          </p>
                        </>
                      )}
                      {appointment?.status === "approved" && (
                        <p className="fw-normal mb-1">Accepted</p>
                      )}
                      {appointment?.status === "rejected" && (
                        <p className="fw-normal mb-1">Rejected</p>
                      )}
                    </td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!appointment?.videoCallId}
                        onClick={() => handleConnect(appointment?.videoCallId)}
                      >
                        Connect
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        onClick={() =>
                          handlePatientDetails(appointment?.patient?._id)
                        }
                      >
                        Patient details
                      </button>
                    </td>
                    <td>
                    <button
                        type="button"
                        className="btn btn-info text-white"
                        
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h5>Patient Details: </h5>
                        <p className="mt-5">Patient name:{appointment?.patientId?.fullName}</p>
                        <p className="mt-5">Problem:{appointment?.patientId?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </table>
        </div>
      </div>

    </div>
  );
};

export default Appointments;
