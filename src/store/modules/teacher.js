import Vue from 'vue'
import * as types from '../mutation-types'
import teacherService from '../../api/teacher'

const state = {
  teachers: [],
  currentArea: {} 
}

const mutations = {
  [types.GET_AREAS] (state, payload) {
    state.teachers = payload.body 
  },
  [types.ADD_AREA] (state, payload) {
    state.teachers.push(payload.body)
    state.currentArea = {} 
  },
  [types.SELECT_AREA] (state, { teacher }) {
    state.currentArea = teacher
  },
  [types.EDIT_AREA] (state, payload) {
    const index = state.teachers.indexOf(state.currentArea)
    if (index > -1) {
      state.teachers[index] = payload.body
      state.currentArea = {} 
    } 
  },
  [types.REMOVE_AREA] (state, teacher) {
    state.teachers.splice(state.teachers.indexOf(teacher), 1)
  }
}

const actions = {
  getAreas({ commit }) {
    teacherService.fetchAreas()
    .then(res => {
        commit(types.GET_AREAS, res)
    })
    .catch( err => console.log(err))
  },
  selectArea({ commit }, teacher) {
    commit(types.SELECT_AREA, {teacher})
  },
  createArea({ commit }, { teacher, cb }) {
    teacherService.createArea(teacher)
    .then(res => {
      commit(types.ADD_AREA, res)
      cb(true)
    })
    .catch( err => console.log(err))
  },
  updateArea({ commit }, { teacher, cb }) {
    teacherService.updateArea(teacher)
    .then(res => {
      commit(types.EDIT_AREA, res)
      cb(true)
    })
    .catch( err => console.log(err))
  },
  deleteArea({ commit }, { teacher, cb }) {
    teacherService.deleteArea(teacher._id)
    .then(res => {
      commit(types.REMOVE_AREA, teacher)
      cb(true)
    })
    .catch( err => console.log(err))
  }
}

const getters = {
  teachers: state => state.teachers,
  currentArea: state => state.currentArea,
}

export default {
  state,
  mutations,
  getters,
  actions
}
