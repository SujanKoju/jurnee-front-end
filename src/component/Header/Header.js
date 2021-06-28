import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";

class Header extends Component {
    render() {
        return (
            <HeaderWrapper className="d-flex justify-content-between">
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav/>
                <NavRight className="d-flex">
                    <NotificationDropdown/>
                    <div className="d-flex user-nav">
                        <img src="public/images/img_user.svg" alt="John Smith" width="54" height="54"/>
                        <div className="user-nav-info">
                            <span className="user-name">John Smith</span>
                            <span className="user-status">McDonald's</span>
                        </div>
                    </div>
                </NavRight>
            </HeaderWrapper>
        )
    }
}

export default Header;

const HeaderWrapper = styled.header`
    align-items: center;
    padding: 14px 48px;
    .logo {
        height: 28px;
        vertical-align: middle;
        width: 128px;
    }
`

const NavRight = styled.ul`
    align-items: center;
    margin-bottom: 0;
    li {
        list-style: none;
    }
    .user-nav {
        align-items: center;
        margin-left: 32px;
        &-info {
            font-size: 0.9rem;
            margin-left: 14px;
            span {
                display: block;
            }
        }
    }
    .user-name {
        font-weight: 600;
    }
    .badge-notification {
        height: 10px;        
        float: right;
        margin-left: -8px;
        margin-top: 4px;
        padding: 0;
        position: relative;
        text-indent: -9999px;
        width: 10px;
    }
    .dropdown-menu {
        background-color: var(--color-secondary);
        border: 0;
        border-radius: 10px;
        left: auto!important;
        right: -50px!important;
        top: 52px!important;
        width: 428px;
        &.show {
            transform: none!important;
        }
        &:before {
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 22px solid var(--color-secondary);
            content: "";
            right: 49px;
            position: absolute;
            top: -21px;
        }
    }
    .dropdown-header {
        color: var(--color-brand);
        padding: 1rem 1.8rem;
        strong {
            font-weight: 600;
        }
    }
    .notification {
        &-title {
            font-size: 1.15rem;
            font-weight: 600;
            margin-bottom: 1.1rem;
        }
        &-list {
            background-color: var(--color-base);
            border-radius: 10px;
            margin-bottom: 16px;
            padding: 1rem 1.5rem;
            & + h4 {
                margin-top: 2rem;
            }
        }
    }
`;