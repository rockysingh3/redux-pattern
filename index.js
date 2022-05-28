const redux = require('redux') 
const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore  
const combineReducers = redux.combineReducers

const logger = reduxLogger.createLogger()


/* define the action */
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

 /* action creator is function that returns a actions  */
function buyCake() {
    /* every action has a type proprioty  */
    return { 
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


/* IceCream function creator  */
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}



 
/* state is always an object in rudex   */
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 10
// }

/* object for cake state */
const initialCakeState = {
    numOfCakes: 10
}

/* object for cake state */
const initialIceCreamState = {
    numOfIceCreams: 10
}


/* (previousState, action) => newState */
/* Reducer function takes a state and action  */
// const reducer = (state = initialState, action ) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             /* first make a copy of the state object and than update the state so other propities don't change */
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             /* first make a copy of the state object and than update the state so other propities don't change */
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state 
//     }
// }

const cakereducer = (state = initialCakeState, action ) => {
    switch(action.type) {
        case BUY_CAKE: return {
            /* first make a copy of the state object and than update the state so other propities don't change */
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state 
    }
}

const IceCreamreducer = (state = initialIceCreamState, action ) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            /* first make a copy of the state object and than update the state so other propities don't change */
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state 
    }
}



/* comin reducer takes an abject of all the reducers and combines them togather  */
const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream: IceCreamreducer
})

/* createStore always take the reducer which contains the init state */
const store = createStore(rootReducer, applyMiddleware(logger))


/* Every instance of store as a method called getState()  */
console.log('Initial state', store.getState())


/* subscribe is a listener = logs every time the state is changed within the store 
Everytime the dispatch method is called the subscribe method gets invoked */
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


/* unsubscribe from the store */
unsubscribe()