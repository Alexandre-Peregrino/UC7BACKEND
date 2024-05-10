class Course {
    //construtor da classe 
    constructor(){
        this.courses = []; //banco de disciplinas em forma de vetor
    }
    //retorna todos as cursos
    getAllCourses(){
        return this.courses;
    }
    //criar um curso
    createCourse(name, description){
        const id = `c${this.courses.length+1}`;//simulando o id único
        const newCourse = {id, name, description};
        this.courses.push(newCourse);
        return newCourse;
    }
    //buscar um curso específico
    getCourseById(id){
        const courseResult = this.courses.find(course => course.id === id)
        return courseResult;
    }
    //criar função deletar - precisamos de um id
    deleteCourse(id){
        const curseIndex = this.courses.findIndex(courses => course.id === id);
        if(courseIndex!== -1){
            this.courses.splice(courseIndex, 1)
            return true;
        }
        return false;
    }
    //Função atualizar registros
    updateCourse(id, name, description){
        const curseIndex = this.courses.findIndex(courses => course.id === id);
        if(courseIndex !== -1){
            this.courses[courseIndex].name = name;
            this.courses[courseIndex].description = description;
            return this.courses[coursesIndex];
        }
        return null;
    }
}
module.exports = Course;