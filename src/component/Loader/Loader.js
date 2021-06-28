import React, {Component} from "react";
import {Progress} from "reactstrap";
import Logo from "../Logo/Logo";
import styled from "styled-components";

function ProgressBarWithLabel(props) {
  const textDisplay = (value) => {
      let returnedText = "";
      switch (value) {
        case 0:
          returnedText = "Tokenizing real life...";
          break;
        case 33:
          returnedText = "Swapping time and space...";
          break;
        case 66:
          returnedText = "We're building the buildings as fast as we can";
          break;
        case 100:
          returnedText = "Do not run! We are your friends!";
          break;
        default:
          returnedText = "Tokenizing real life...";
      }
      return returnedText;
  };
  return (
    <div className="progress-linear">
      <Progress {...props}/>
      <p>{textDisplay(props.value)}</p>
    </div>
  )
}

export default function Loader() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if(prevProgress === 66) {
          return 100;
        }
        return prevProgress >= 100 ? 33 : prevProgress + 33;
      });
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
       <LoadingScreen>
        <Logo/>
        <ProgressBarWithLabel value={progress}></ProgressBarWithLabel>
    </LoadingScreen>
  );
};

const LoadingScreen = styled.div`
  align-items: center;
  background: url(public/images/img_loadingscreen.svg) no-repeat 0 0/cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  .progress {
    background-color: rgba(236,236,236,0.67);
    border-radius: 11px;
    height: 16px;
    margin: 40px 0 24px;
    width: 528px;
    &-linear {    
      color: #330966;
      font: 600 1rem 'Poppins', sans-serif;
      text-align: center;
    }
    &-bar {
      background-color: #FEA41D;
    }
  }
` 