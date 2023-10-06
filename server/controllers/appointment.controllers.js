const { Appointment } = require('../models/appointment.models');
const { Doctor } = require('../models/doctor.models');

const getAvailableAptTime = async (req, res) => {
    try {
        const doctorId = req.params.id;

        const existingAppointments = await Appointment.find({ doctorId: doctorId });
        const doctor = await Doctor.findById(doctorId);

        if (!existingAppointments || existingAppointments.length === 0) {
            return res.status(404).json({ message: "No appointments found" });
        }

        const bookedTimeSlots = existingAppointments.map(appointment => appointment.time);

        const availableTimeSlots = doctor.availableTimeSlots.filter(slot => !bookedTimeSlots.includes(slot));

        res.status(200).json({ availableTimeSlots });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};



const addAppointment = async (req, res) => {

    const { patientId, doctorId, date, time, description } = req.body;

    const newAppointment = await Appointment.create({
        patientId: patientId,
        doctorId: doctorId,
        date: date,
        time: time,
        description: description
    });
    // const existing_doctor = await Doctor.findById(doctorId);
    // existing_doctor.availableTimeSlots.push(date + time);

    res.status(200).json({ message: "Appointment added successfully", newAppointment });
}


const acceptOrRejectApt = async (req, res) => {

    const { appointmentId, status } = req.body;
    const existing_appointment = await Appointment.findById(appointmentId);
    if (!existing_appointment) return res.status(404).json({ message: "Appointment not found" });
    if (status === "accepted") {
        existing_appointment.status = status;
        existing_appointment.videoCallId = existing_appointment._id;
        await existing_appointment.save();
        const doctor = await Doctor.findById(existing_appointment.doctorId);
        const patient = await Patient.findById(existing_appointment.patientId);
        doctor.appointments.push(existing_appointment._id);
        doctor.patients.push({ patient: existing_appointment.patientId });
        patient.appointments.push(existing_appointment._id);
        await doctor.save();
        await patient.save();
    } else {
        existing_appointment.status = status;
        await existing_appointment.save();
    }

    res.status(200).json({ message: "Appointment updated successfully", existing_appointment });

}



module.exports = { addAppointment, acceptOrRejectApt, getAvailableAptTime }