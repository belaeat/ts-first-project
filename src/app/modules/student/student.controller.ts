// Step 5: Creating controller function for handling application logic. It just collect request and send the response

// imports

import { Request, Response } from 'express';
import { studentServices } from './student.service';

// creating controller function

const createStudent = async (req: Request, res: Response) => {
  // jehetu asynchronously hocche tai try catch method use korte hobe error handling er jonno

  try {
    const { student: studentData } = req.body;

    // it will call service function and send the data

    const listedData = await studentServices.insertStudentIntoDB(studentData);

    // send response

    res.status(200).json({
      success: true,
      message: 'Student has been created successfully',
      data: listedData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
};
