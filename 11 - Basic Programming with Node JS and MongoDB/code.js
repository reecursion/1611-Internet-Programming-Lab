const mongoose = require('mongoose');
// Connection URL and database name - replace local host with string 127.0.0.1 if new node js used
var dbURI = 'mongodb://127.0.0.1:27017/Patient_Details';
// Use connect method to connect to the server
mongoose.connect(dbURI);
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});
mongoose.connection.on('error', (err) => {
  console.log('Database error:' + err);
});

// Define schema for patient
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  id: String,
  gender: String,
  address: String,
  maritalStatus: String,
  dateOfVisit: Date,
});

const Patient = mongoose.model('Patient', patientSchema);
// Creating a record : Crud
const addPatient = (patientData) => {
  const patient = new Patient(patientData);
  patient.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Patient added successfully!');
  });
};

// Deleting a record - cruD
const deletePatient = (id) => {
  Patient.deleteOne({ id: id }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Patient details deleted succesfully!');
  });
};

// Updating a record - crUd
const updatePatient = (id, newData) => {
  Patient.updateOne({ id: id }, newData, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Patient details updated successfully!');
  });
};

// Searching a record - cRud
const searchPatient = (id) => {
  Patient.findOne({ id: id }, (err, patient) => {
    if (err) {
      console.log(err);
      return;
    } else if (patient == null) {
      console.log('Patient not found in database');
      return;
    }
    console.log('Patient found');
    console.log(patient);
  });
};

// Example usage
const newpatient = {
  name: 'Maria Sone',
  age: 30,
  id: '2483',
  gender: 'Male',
  address: '123 Main St',
  maritalStatus: 'Single',
  dateOfVisit: new Date(),
};

addPatient(newpatient);

//deletePatient('1234');

//updatePatient('1234', { name: 'Jane Smith', gender: 'Female' });

searchPatient('1234');
