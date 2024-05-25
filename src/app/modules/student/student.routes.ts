// Step 4: Creating routes from the student module

// imports

import express from 'express';
import { studentController } from './student.controller';

// getting Route() object from express

const router = express.Router();

// creating route, and it will call controller function later

router.post('/create-student', studentController.createStudent);

export const StudentRoutes = router;
