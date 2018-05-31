import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)


export default new vuex.Store({
    state:{
        boards: [],
        tasks: [],
        lists: [],
        comments: {},
    },
    mutations:{
        setBoards(state, boards){
            state.boards=boards
        },
        setUser(state, user){
            state.user = user
        }
        addTask(state, board){
            state.tasks.push(task)
        },
    },
    actions: {
        //auth stuff
        login({commit, dispatch}, loginCredentials){
            
        }, 
        logout(commit, dispatch), {

        },

    }
})