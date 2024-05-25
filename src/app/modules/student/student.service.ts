// Step 6: Creating service. It will handle the business logic

// imports

import { Student } from './student.interface';
import { StudentModel } from './student.model';

// creating service

const insertStudentIntoDB = async (student: Student) => {
  const listedData = await StudentModel.create(student);
  return listedData;
};

export const studentServices = {
  insertStudentIntoDB,
};
