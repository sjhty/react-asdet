import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions/userInfo'

class UserInfo extends Component {
    render () {
        const { isLoading, userInfo, errorMsg} = this.props.userInfo
        
        console.log(userInfo)
        
        return (
            <div>
                {
                    userInfo.user ? (<p>用户名：{userInfo.user.name}</p>) : (<p>用户名</p>)
                }
                <button onClick={() => this.props.getUserInfo()}>提交</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);