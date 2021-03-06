import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar, NavItem, MenuItem}  from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'

export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">EaseLife</Link>
                </div>
          
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">首页</a></li>
                  <li><Link to="/tieba">问答贴吧</Link></li>
                  {/* <li><a href="#">乱七八糟</a></li> */}
                </ul>
                <form className="navbar-form navbar-left">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="搜索您的问题..." />
                    <div className="input-group-btn">
                      <button className="btn btn-default btn-nova" type="button">&nbsp;&nbsp;<i className="fas fa-search"></i>&nbsp;&nbsp;</button>
                    </div>
                  </div>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li ><i className="fas fa-comments fa-1x message"><span className="">42</span></i></li>
                  <li><a href="#">
                          <div className="user_logo_nav">
                                  <img src="/static/img/car.jpeg" />
                          </div>
                  </a></li>
                </ul>
              </div>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </nav>

        )
    }
}