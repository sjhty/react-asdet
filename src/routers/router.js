import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/home/home';
import Page1 from '../pages/page1/page1';
import Counter from '../pages/counter/counter';
import UserInfo from '../pages/userInfo/userInfo';
import { Provider } from 'react-redux';
import store from '../redux/store'

const getRouter = () => (
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">page1</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/userInfo">用户信息</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/userInfo" component={UserInfo}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default getRouter;
