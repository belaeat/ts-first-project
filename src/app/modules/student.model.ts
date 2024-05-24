import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';

// 2. Create a Schema corresponding to the document interface.

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'female'], // eigula predefined value, tai enum type use korechi, enum type schema'r ekta special type
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', ' A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    fathersName: { type: String, required: true },
    fathersOccupation: { type: String, required: true },
    fathersContactNo: { type: String, required: true },
    mothersName: { type: String, required: true },
    mothersOccupation: { type: String, required: true },
    mothersContactNo: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});
