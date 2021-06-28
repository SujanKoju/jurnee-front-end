import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
    return (
        <LogoSection>
            {/* <Link to="/"> */}
                <img src="public/images/img_logo.svg" alt="Jurnee" width="286" height="72" className="logo"/>
            {/* </Link> */}
        </LogoSection>
    )
}

export default Logo;

const LogoSection = styled.span`
`