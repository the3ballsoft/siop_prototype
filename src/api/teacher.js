import Vue from 'vue'
import Config from './../config'

class TeacherService  {

  fetchTeachers(){
    //return Vue.http.get(Config.api.teachersUrl)
    return [
      {
        person: {
          dni: '1082963607',
          name: 'Danilo Lopez Rueda',
          grade: '14',
        },
        position: 'Docente',
        contract_level: 'Propiedad',
        status: 'Normal',
        schema: 'Primaria',
        profession: 'Lic. en ciencias sociales',
        headquaters: 'I.E.D Jhon F Kennedy - Principal',
        area: 'Rector Asig. Funciones',
        observation: ''
      },
      {
        person: {
          dni: '36560871',
          name: 'Carmen Maestre Poveda',
          grade: '12',
        },
        position: 'Docente',
        contract_level: 'Propiedad',
        status: 'Normal',
        schema: 'Secundaria',
        profession: 'Comercio internacional',
        headquaters: 'I.E.D Jhon F Kennedy - Principal',
        area: 'Basica primaria',
        observation: ''
      },
      {
        person: {
          dni: '85454478',
          name: 'Francisco Collante Arvila',
          grade: '2A',
        },
        position: 'Docente',
        contract_level: 'Provisional Vacante Definitiva',
        status: 'Normal',
        schema: 'Secundaria',
        profession: 'Lic. en Sociales',
        headquaters: 'I.E.D Jhon F Kennedy - Principal',
        area: 'Ciencias sociales, Historia y Geografia',
        observation: ''
      }
    ] 
  }

  createTeacher(data){
    return 1
    //return Vue.http.post(Config.api.teachersUrl, data)
  }

}

const teacherService = new TeacherService()

export default teacherService 
