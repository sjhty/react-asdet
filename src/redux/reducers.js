import counter from './reducers/counter'

export default function combinereducers(state={}, action) {
    return {
        counter: counter(state.counter, action)
    }
}