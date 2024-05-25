// imports

import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

// Step 2: Creating a Schema corresponding to the document interface.

// creating instance from Schema class

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fathersName: { type: String, required: true },
  fathersOccupation: { type: String, required: true },
  fathersContactNo: { type: String, required: true },
  mothersName: { type: String, required: true },
  mothersOccupation: { type: String, required: true },
  mothersContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

// creating schema

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'], // eigula predefined value, tai enum type use korechi, enum type schema'r ekta special type
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', ' A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});

// Step 3: Creating model

export const StudentModel = model<Student>('Student', studentSchema);
