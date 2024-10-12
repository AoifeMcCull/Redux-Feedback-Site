import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feelingReducer = (state = 0, action) => 
    {
        if(action.type ==='setFeeling'){
            return(action.payload)
        }
        return(state)
    }
const understandingReducer = (state = 0, action) => 
    {
        if(action.type ==='setUnderstanding'){
            return(action.payload)
        }
        return(state)
    }
const supportReducer = (state = 0, action) => 
    {
        if(action.type ==='setSupport'){
            return(action.payload)
        }
        return(state)
    }

const commentReducer = (state = '', action) => 
    {
        if(action.type ==='setComments'){
            return(action.payload)
        }
        return(state)
    }



const store = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer
  }),
  applyMiddleware(logger),
);


export default store;