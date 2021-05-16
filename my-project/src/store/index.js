import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []//④
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {//③
      state.blogs = blogs
    }
  },
  actions: { 
    async fetchBlogs({ commit }) {//①
      await axios().get('/blogs')
        .then(res => {
          commit('FETCH_BLOGS', res.data)//②
        })
        .catch(e => console.log(e))
    }
  }
})