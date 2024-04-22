import { MongoClient } from "mongodb";
import { mockDataTraningServiceDevCourse } from "./src/mockData/TrainingServiceDev.courses";
import { mockDataTrainingServiceDevEnrollment } from "./src/mockData/TrainingServiceDev.enrollments";
import { mockDataTrainingServiceDevInstructors } from "./src/mockData/TrainingServiceDev.instructors";
import { mockDataTrainingServiceDevTest } from "./src/mockData/TrainingServiceDev.test";
import { mockDataTrainingServiceDevClass } from "./src/mockData/TrainingServiceDevClasses";
import { mockDataTrainingServiceTrainers } from "./src/mockData/TrainingServiceTrainers";

const uri = "mongodb://root:example@localhost:27017/TrainingService?authSource=admin";

const client = new MongoClient(uri);

async function runSeed() {
    try {
        const database = client.db("TrainingService");
        const collections = ["classes", "courses", "enrollments", "instructors", "test", "trainers"]
        const listMockData = [mockDataTrainingServiceDevClass, mockDataTraningServiceDevCourse, mockDataTrainingServiceDevEnrollment, mockDataTrainingServiceDevInstructors, mockDataTrainingServiceDevTest, mockDataTrainingServiceTrainers]

        database.dropDatabase()

        for (let i = 0; i < collections.length; i++) {
            if (listMockData[i].length !== 0) {
                const collection = database.collection(collections[i]);
                const result = await collection.insertMany(listMockData[i], { ordered: true });
                console.log(`${result.insertedCount} documents were inserted`);
            } else {
                await database.createCollection(collections[i]);
            }
        }
    } finally {
        await client.close();
    }
}
runSeed()