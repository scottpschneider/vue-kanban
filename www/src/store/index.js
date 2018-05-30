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
        addTask(state, board){
            state.tasks.push(task)
        },
    }
})