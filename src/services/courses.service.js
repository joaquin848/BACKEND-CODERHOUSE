import { CoursesDao } from "../daos/courses.dao.js"; 
import  NotFoundError from "../errors/not-found.error.js";
export const createOne = async (courseInfo) => {
    return CoursesDao.createOne(courseInfo);
};

export const getAll = async () => {
    return CoursesDao.getAll();
};

export const getById = async (id) => {
    const course = await CoursesDao.getById(id);
    if(!course) {
        throw new NotFoundError("Course")
    }
    return course;
};