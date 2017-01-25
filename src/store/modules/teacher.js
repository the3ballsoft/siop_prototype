import Vue from 'vue'
import * as types from '../mutation-types'
import teacherService from '../../api/teacher'

const state = {
  teachers: [],
  currentTeacher: {},
  persons: [
    {
      dni: '12121212',
      name: 'Alfonso Lozano Barraza',
      grade: '2A',
      active: false
    },
    {
      dni: '23232321',
      name: 'Andrea Zamora Avendaño',
      grade: '1A',
      active: false
    },
    {
      dni: '33333331',
      name: ' Jesus Olarte Porto',
      grade: '2B',
      active: false
    }
  ]
}

const mutations = {
  [types.GET_TEACHERS] (state, payload) {
    if(state.teachers.length == 0) {
      state.teachers = payload
    }   
  },
  [types.ADD_TEACHER] (state, payload) {
    state.teachers.push(payload)
    state.currentTeacher = {} 
  },
  [types.SELECT_TEACHER] (state, { teacher }) {
    state.currentTeacher = teacher
  },
  [types.EDIT_TEACHER] (state, payload) {
    const index = state.teachers.indexOf(state.currentTeacher)
    if (index > -1) {
      state.teachers[index] = payload
      state.currentTeacher = {} 
    } 
  },
  [types.REMOVE_TEACHER] (state, teacher) {
    state.teachers.splice(state.teachers.indexOf(teacher), 1)
  }
}

const actions = {
  getTeachers({ commit }) {
    const res = teacherService.fetchTeachers()
    commit(types.GET_TEACHERS, res)
  },
  selectTeacher({ commit }, teacher) {
    commit(types.SELECT_TEACHER, {teacher})
  },
  createTeacher({ commit }, { teacher, cb }) {
    //const res = teacherService.createTeacher(teacher)
    commit(types.ADD_TEACHER, teacher)
    cb(true)
  },
  updateTeacher({ commit }, { teacher, cb }) {
    //const res = teacherService.updateTeacher(teacher)
    commit(types.EDIT_TEACHER, teacher)
    cb(true)
  },
  deleteTeacher({ commit }, { teacher, cb }) {
    commit(types.REMOVE_TEACHER, teacher)
    cb(true)
  }
}

const getters = {
  teachers: state => state.teachers,
  currentTeacher: state => state.currentTeacher,
  persons: state => state.persons,
}

export default {
  state,
  mutations,
  getters,
  actions
}
