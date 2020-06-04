import {createStore, combineReducers} from 'redux'
import modalReducer from './modal/reducer'

const reducers = combineReducers({
    modalReducer  
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store