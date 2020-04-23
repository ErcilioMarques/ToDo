import Vue from "vue";
import { uid } from "quasar";
const state = {
  tasks: {
    // ID1: {
    //   name: "Go to shop",
    //   completed: false,
    //   dueDate: "2019/02/02",
    //   dueTime: "10:28"
    // },
    // ID2: {
    //   name: "Got bananas",
    //   completed: false,
    //   dueDate: "2019/05/20",
    //   dueTime: "20:10"
    // },
    // ID3: {
    //   name: "Go apples",
    //   completed: false,
    //   dueDate: "2019/01/20",
    //   dueTime: "16:30"
    // }
  }
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  addTask(state, payload){
    Vue.set(state.tasks,payload.id,payload.task)
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },

  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },

  addTask({ commit }, task) {
    let taskUid = uid();
    let payload = {
      id: taskUid,
      task: task
    };
    commit("addTask", payload);
  }
};

const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
