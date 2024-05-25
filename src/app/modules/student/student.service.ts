// Step 6: Creating service. It will handle the business logic

// imports

import { Student } from './student.interface';
import { StudentModel } from './student.model';

// creating service

const insertStudentIntoDB = async (student: Student) => {
  const listedData = await StudentModel.create(student);
  return listedData;
};

const getStudentsFromDB = async () => {
  const studentsInfo = await StudentModel.find();
  return studentsInfo;
};

const getStudentById = async (id: string) => {
  const singleStudentInfo = await StudentModel.findOne({ id });
  return singleStudentInfo;
};

export const studentServices = {
  insertStudentIntoDB,
  getStudentsFromDB,
  getStudentById,
};
