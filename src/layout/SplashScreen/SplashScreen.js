import React, {Component} from "react";
import styled from "styled-components";
import Header from "../../component/Header/Header";

class SplashScreen extends Component {
    render() {
        return(
            <SplashScreenWrapper>
                <Header/>
                <div className="container-main">
                    <SplashScreenContent className="d-flex">
                        <h1>Welcome, John</h1>
                        <p>Here is the summary of your account.</p>
                        <img src="public/images/img_splashscreen.svg" alt="Welcome" width="536" height="476" />
                    </SplashScreenContent>
                </div>
            </SplashScreenWrapper>
        )
    }
}

export default SplashScreen;

const SplashScreenWrapper = styled.div`
    text-align: center;
    .container-main {
        padding: 0;
    }
`

const SplashScreenContent = styled.div`
    align-items: center;
    height: calc(100vh - 86px);
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 5rem;
        font-weight: 700;
        @media all and (max-width: 1440px) {
            font-size: 4rem;
        }
    }
    p {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        @media all and (max-width: 1440px) {
            font-size: 1.1rem;
        }
    }

    img {
        @media all and (max-width: 1440px) {
            height: auto;
            width: 460px;
        }
    }
`