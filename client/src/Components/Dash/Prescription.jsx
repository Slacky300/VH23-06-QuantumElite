import React, { useEffect } from "react";
import { prescriptionAction, getPrescriptionAction } from "../../redux/prescription/prescriptionAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoggedinUser } from "../../redux/Auth/authActions";

const Prescription = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state?.auth?.user);
    const prescription = useSelector((state) => state?.prescription?.prescription);
    useEffect(() => {
      dispatch(getPrescriptionAction());
    }, [dispatch]);
  
  return (
    <div>Prescription</div>
  )
}

export default Prescription