import counter from './reducers/counter'
import userInfo from './reducers/userInfo'

export default function combinereducers(state={}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo,action)
    }
}