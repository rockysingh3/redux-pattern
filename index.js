const redux = require('redux') 
const createStore = redux.createStore  


/* define the action */
const BUY_CAKE = 'BUY_CAKE'


 /* action creator is function that returns a actions  */
function buyCake() {
    /* every action has a type proprioty  */
    return { 
        type: BUY_CAKE,
        info: 'First redux action'
    }
}




/* state is always an object in rudex   */
const initialState = {
    numOfCakes: 10
}


/* (previousState, action) => newState */
/* Reducer function takes a state and action  */
const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case BUY_CAKE: return {
            /* first make a copy of the state object and than update the state so other propities don't change */
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state 
    }
}


/* createStore always take the reducer which contains the init state */
const store = createStore(reducer)


/* Every instance of store as a method called getState()  */
console.log('Initial state', store.getState())


/* subscribe is a listener = logs every time the state is changed within the store 
Everytime the dispatch method is called the subscribe method gets invoked */
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


/* unsubscribe from the store */
unsubscribe()