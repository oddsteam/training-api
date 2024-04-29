import { ObjectId } from "bson";
import mongoose from "mongoose";
import { mockDataTrainingServiceCourses as mockDataCourse } from "./src/mockData/TrainingService.courses";
import { mockDataTrainingServiceEnrollments as mockDataEnrollment } from "./src/mockData/TrainingService.enrollments";
import { mockDataTrainingServiceDevInstructors as mockDataInstructor } from "./src/mockData/TrainingService.instructors";
import { mockDataTrainingServiceTests as mockDataTest } from "./src/mockData/TrainingService.tests";
import { mockDataTrainingServiceClasses as mockDataClass } from "./src/mockData/TrainingServiceDev.classes";
import { mockDataTrainingServiceTrainers as mockDataTrainer } from "./src/mockData/TrainingServiceTrainers";
import ClassDeatilsModel from "./src/models/classDetails";
import CourseModel from "./src/models/course";
import EnrollmentModel from "./src/models/enrollment";
import InstructorModel from "./src/models/instructors";
import TestModel from "./src/models/test";
import TrainerModel from "./src/models/trainer";

const uri = process.env.DB_URI || "mongodb://root:example@localhost:27017/TrainingService?authSource=admin";

mongoose.connect(uri)

async function runSeed() {
    try {
        const collections = [CourseModel, EnrollmentModel, InstructorModel, TestModel, ClassDeatilsModel, TrainerModel]
        const listMockData = [mockDataCourse, mockDataEnrollment, mockDataInstructor, mockDataTest, mockDataClass, mockDataTrainer]

        for (let i = 0; i < collections.length; i++) {
            await collections[i].createCollection()
            for (let j = 0; j < listMockData[i].length; j++) {
                if (listMockData[i].length !== 0) {
                    await collections[i].updateOne({ _id: new ObjectId(listMockData[i][j]._id) }, { $set: listMockData[i][j] }, { upsert: true })
                }
            }
            console.log("create collection", collections[i], "success")
        }
    } finally {
        await mongoose.disconnect();
    }
}
runSeed()