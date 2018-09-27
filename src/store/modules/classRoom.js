import * as types from '@/store/mutations'
import { axiosInstance } from '@/vue-global-props'

const state = {
  info: {}, // 信息
  classRoomList: {}, // 学生教室列表
  showClassRoomList: {} // 展示教室列表
}

const mutations = {
  [types.CLASS_ROOM_LIST] (state, info) {
    state.classRoomList = info
  },
  [types.SHOW_CLASS_ROOM_LIST] (state, info) {
    state.showClassRoomList = info
  }

}

const actions = {

  // 获取课程学生教室列表
  fetchClassRoomList ({commit}, payload) {
    return axiosInstance.get({
      url: '/helper/classroom/83/student/page',
      params: payload,
      successType: types.CLASS_ROOM_LIST,
      commit
    })
  },

  // 获取展示学生教室列表
  fetchShowClassRoomList ({commit}, payload) {
    return axiosInstance.post({
      url: '/helper/classroom/display',
      data: payload,
      successType: types.SHOW_CLASS_ROOM_LIST,
      commit
    })
  },

  // 拉取展示学生教室流
  pullClassRoom ({commit}, payload) {
    return axiosInstance.post({
      url: '/helper/classroom/student',
      data: payload,
      successType: types.PULL_ROOM_STREAM,
      commit
    })
  },

  // 修改学生设备的声音
  changeStudentDeviceVoice ({commit}, payload) {
    return axiosInstance.put({
      url: '/helper/classroom/student/' + payload.deviceId + '/voice/' + payload.voiceStatus,
      data: payload,
      successType: types.CHANGE_STUDENT_VOICE,
      commit
    })
  },

  // 切换视角
  changeView ({commit}, payload) {
    return axiosInstance.put({
      url: '/helper/classroom/' + payload.viewStatus + '/view',
      data: payload,
      successType: types.CHANGE_VIEW,
      commit
    })
  }

}

export default {
  state,
  actions,
  mutations
}
