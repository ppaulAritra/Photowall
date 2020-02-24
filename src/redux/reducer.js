
import post from '../data/posts'
const postReducer= function posts(state=post,action){
    console.log(action.index)
    switch(action.type){
    case 'REMOVE_POST':return [...state.slice(0,action.index),...state.slice(action.index+1)]
    default: return state
    }

}
export default postReducer;