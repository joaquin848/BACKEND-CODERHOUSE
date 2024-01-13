import Basicdao from "./basic.dao.js";
import {coursesModel} from "../models/courses.model.js"

class CoursesDao extends Basicdao{
    constructor() {
        super(coursesModel, ["teacher", "students"]);
    }
}

export const CoursesDao = new CoursesDao();