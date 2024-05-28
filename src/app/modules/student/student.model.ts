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
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: [true, 'Fathers name is required'],
  },
  fathersOccupation: {
    type: String,
    required: [true, 'Fathers occupation is required'],
  },
  fathersContactNo: {
    type: String,
    required: [true, 'Fathers contact no is required'],
  },
  mothersName: {
    type: String,
    required: [true, 'Mothers name is required'],
  },
  mothersOccupation: {
    type: String,
    required: [true, 'Mothers occupation is required'],
  },
  mothersContactNo: {
    type: String,
    required: [true, 'Mothers contact no is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardians name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardians occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardians contact no is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardians address is required'],
  },
});

// creating schema

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    type: userNameSchema,
    required: [true, 'Students name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The gender field can only be one of the following : 'male','female, or 'other'",
    },
    required: true,
  }, // eigula predefined value, tai enum type use korechi, enum type schema'r ekta special type

  email: { type: String, required: [true, 'Students email is required'] },
  dateOfBirth: { type: String },
  contactNumber: {
    type: String,
    required: [true, 'Students contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Students emergency contact no is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', ' A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardians detail is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardians detail is required'],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

// Step 3: Creating model

export const StudentModel = model<Student>('Student', studentSchema);
