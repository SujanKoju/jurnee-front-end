import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    const sprite = 'public/images/sprite.svg';
    return (
        <NavWrapper>
        <ul className="d-flex">
            <li>
                <NavLink to="/" exact>
                    <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#create-dashboard`} /></svg>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/jobs" exact>
                    <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#bag-alt`} /></svg>
                Jobs
                </NavLink>
            </li>
            <li>
                <NavLink to="/chat" exact>
                    <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#comments-alt`} /></svg>
                Chat
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" exact>
                    <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#user`} /></svg>
                Profile
                </NavLink>
            </li>
            <li className="settings">
                <NavLink to="/settings" exact>
                    <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#setting`} /></svg>
                Settings
                </NavLink>
            </li>
        </ul>
    </NavWrapper>
    )
}

export default Nav;

const NavWrapper = styled.nav`
    ul {
        align-items: center;
        margin: 0;
        li {
            list-style: none;
            margin-left: 20px;
            a {
                align-items: center;
                border-radius: 18px;
                color: var(--color-secondary-dark);
                display: flex;
                font-weight: 500;
                padding: 7px 20px;
                text-decoration: none;
                transition: all 0.3s ease-in-out;
                svg {
                    fill: var(--color-secondary-dark)!important;
                    margin-right: 12px;
                    transition: all 0.3s ease-in-out;
                }
                &:hover{
                    color: var(--color-brand);
                    svg {
                        fill: var(--color-brand)!important;
                    }
                }
                &.active {
                    background-color: #F8F8F8;
                    color: var(--color-brand);
                    svg {
                        fill: var(--color-brand)!important;
                    }
                }
            }
            &.settings:before {
                background-color: #D7CEE0;
                content: "";
                float: left;
                height: 24px;
                margin: 6px 40px 0 20px;
                width: 2px;
            }
        }
}
`