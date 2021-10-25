import React, {  lazy } from "react";
import Button from '../../common/ButtonMains/ButtonMain'
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
import './homeStyles.css';
import  ScrollToTop from '../../components/ScrollTopFunc';
import About  from '../About/About'
function findPos(objPosition) {
    let curTop = 0;
    if (objPosition.offsetParent) {
        do {
            curTop += objPosition.offsetTop;
        } while (objPosition === objPosition.offsetParent);
    return [curTop];
    }
}
const Container = lazy(() => import("../../common/Container"));
const Home = (props, i) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  } 
  const scrollToId = () => {
    window.scrollTo(0,findPos(document.getElementById("scroll")));
  } 
  return (<div className="Main-Container" > 
          <ScrollToTop>
                <Container>
                  <div className="IntroContainer"> 
                    <>
                      <div onClick={scrollToId}>
                      <div className="AppAboutContainer">
                        <div className="AppCon">
                          <div className="App">
                                <Tooltip
                                      arrow={8}
                                      background="rgb(209, 29, 50)"
                                      border="#0e1111"
                                      color="#FFF"
                                      content="Click to Enter JDP Electrical"
                                      fadeDuration={3}
                                      fadeEasing="linear"
                                      fixed={false}
                                      fontFamily="inherit"
                                      fontSize="inherit"
                                      offset={0}
                                      padding={8}
                                      placement="bottom"
                                      radius={33}
                                      zIndex={1}
                                        customCss={css`
                                          white-space: nowrap;
                                          word-break: break-all;
                                        `}
                                  >
                                  <Button onClick={scrollToTop}/>
                              </Tooltip>
                              
                            </div>
                        </div>
                      </div>
                </div>
                </>
                  <div className="enter-h1" onClick={scrollToId}>
                    <h1 id="Enter-Title">
                    Enter JDP Electrical Services
                    </h1>
                  </div>
              </div>
                <About id="about"/>
            </Container>
          </ScrollToTop>
    </div>
  );
};

export default (Home);