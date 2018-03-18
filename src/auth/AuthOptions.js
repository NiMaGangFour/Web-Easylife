import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AuthOptions extends Component {
  render() {
    return (
        <div className="join-us  nova-margin nova-padding nova-card">
            扫描二维码加入我们
            <i className="fas fa-qrcode fa-8x"></i>
            <hr />
            <li><Link to='/auth/email'> <i className="fas fa-at"></i> 邮箱注册</Link></li>
            <li><Link to='/auth/google'><i className="fab fa-google-plus-g"></i> Google登陆</Link></li>
            <li><Link to='/'><i className="fab fa-facebook"></i> Facebook登陆</Link></li>
            <li><Link to='/'><i className="fab fa-weixin"></i> 微信登陆</Link></li>
        </div>
    )
  }
}