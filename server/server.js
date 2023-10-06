const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const mydb = require('./db')
require('dotenv').config();
const authRoutes = require('./routes/auth.routes')
const doctorRoutes = require('./routes/doctor.routes')
const patientRoutes = require('./routes/patient.routes')
const appointmentRoutes = require('./routes/appointment.routes');
const vendorRoutes = require('./routes/vendor.routes');
const prescriptionRoutes = require('./routes/prescription.routes');


app.use(express.json())

app.use(cors())

mydb.myDb();

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})



app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/doctor', doctorRoutes);
app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/vendor', vendorRoutes);
app.use('/api/v1/prescription', prescriptionRoutes);
