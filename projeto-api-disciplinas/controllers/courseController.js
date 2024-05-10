const Course = require('../models/course');
const courseModel = new Course();

class CourseController{
    // função para retornar todos os cursos
    getAllCourses(req, res){
        const courses = courseModel.getAllCourses();
        res.json(courses);
    }

    createCourse (req, res){
        const {name, description} = req.body;
        const newCourse = courseModel.createCourse.Course(name, descrition);
        res.status(201).json(newCourse);
    }

    getCourseById(req, res){
        const courseId = req.params.id;
        const course = courseModel.getCourseById(courseId);
        if(!course){
            return res.status(404).json({msg: 'Course not found'});
        }
        res.json(course);
    }
    deleteCourse (req, res){
        const courseId = req.params.id;
        const courseDeleted = courseModel.deleteCourse(courseId);
        if(!courseDeleted){
            return res.status(404).json({msg: 'Course not found'});
        }
        res.json({msg: 'Course deleted sucessfully'});
    }
    updateCourse(req, res){
        const courseId = req.params.id;
        const {name, description} = req.body;
        const courseUpdate = courseModel.updateCourse(courseId, name, description);
        if(!courseUpdate){
            return res.status(404).json({msg: 'Course not found'});
        }
        res.json({couseUpdate});
    }
}
module.exports = new CourseController();