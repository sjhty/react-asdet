import { INCREMENT, DECREMENT, RESET} from '../actions/counter'
import store from './store'

//打印初始状态
console.log(store.getState());

//每次state更新打印日志
//subscribe 返回一个函数注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(INCREMENT());
store.dispatch(DECREMENT());
store.dispatch(RESET());

unsubscribe;