import Vue from 'vue'
import Config from './../config'

class TeacherService  {

  fetchTeachers(){
    return 1
    //return Vue.http.get(Config.api.teachersUrl)
  }

  createTeacher(data){
    return 1
    //return Vue.http.post(Config.api.teachersUrl, data)
  }

}

const teacherService = new TeacherService()

export default teacherService 
