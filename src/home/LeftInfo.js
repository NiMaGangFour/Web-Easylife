import React, { Component } from 'react'
import AuthOptions from '../auth/AuthOptions'
import Personal from '../personal/Personal'
import './Home.css'

export default class LeftInfo extends Component {
  render() {
    return (
        <div className="col-sm-12 col-lg-3" >
            <AuthOptions />
            <Personal />
          
            <div className="site-info   nova-margin nova-padding nova-card">
                <ul>
                    <li>联系我们</li>
                    <li>隐私协议</li>
                    <li>侵权举报</li>
                    
                    <hr/>
                    <li>Nova Software </li>
                    <li>Canberra House</li>
                    <li>+61 4 52542687</li>
                    <li>info@novasoftware.com.au</li>
                </ul>
            </div>
      </div>
    )
}
}