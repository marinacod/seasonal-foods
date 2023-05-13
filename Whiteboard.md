To address: 
- figure out specific link needed for each food object and reformat images to work as links -- esp with calling on API
- it seems like I could just hard code the information about about each food into a separate page-- is there a benefit to using a C# API?

-------------
copied code from FoodList.js, backup
-------------
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Avocado from "./../imgs/Avocado.png";
import Banana from "./../imgs/Banana.png";
import Blueberries from "./../imgs/Blueberries.png";
import Broccoli from "./../imgs/Broccoli.png";
import Cabbage from "./../imgs/Cabbage.png";
import Carrots from "./../imgs/Carrots.png";
import Cauliflower from "./../imgs/Cauliflower.png";
import Cherry from "./../imgs/Cherry.png";
import Dragonfruit from "./../imgs/Dragonfruit.png";
import Grapes from "./../imgs/Grapes.png";
import Kiwi from "./../imgs/Kiwi.png";
import Mango from "./../imgs/Mango.png";
import Orange from "./../imgs/Orange.png";
import Tomato from "./../imgs/Tomato.png";
import Watermelon from "./../imgs/Watermelon.png";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const StyledFoodList = styled.div`
  img {
    height: 100px;
  }

  .place_list {
    position: absolute;
    z-index: 1;
    padding: 20px;
    box-shadow: 0px 8px 10px 0px #0000002b;
  }

  .circle-container {
    position: relative;
    width: 600px;
    height: 600px;
    padding: 20px;
    border: solid 1px;
    border-radius: 50%;
    margin: 60px auto;
  }
  .circle-container a {
    display: block;
    position: absolute;
    top: 50%; 
    left: 50%;
    width: 50px; 
    height: 50px;
    margin: -10px;
  }
  // .circle-container img { display: block; width: 100%; }
  // .deg0 { transform: translate(200px); }
  // .deg24 { transform: rotate(24deg) translate(200px) rotate(-24deg); }
  // .deg48 { transform: rotate(48deg) translate(200px) rotate(-48deg); }
  // .deg72 { transform: rotate(72deg) translate(200px) rotate(-72deg); }
  // .deg96 { transform: rotate(96deg) translate(200px) rotate(-96deg); }
  // .deg120 { transform: rotate(120deg) translate(200px) rotate(-120deg); }
  // .deg144 { transform: rotate(144deg) translate(200px) rotate(-144deg); }
  // .deg168 { transform: rotate(168deg) translate(200px) rotate(-168deg); }
  // .deg192 { transform: rotate(192deg) translate(200px) rotate(-192deg); }
  // .deg216 { transform: rotate(216deg) translate(200px) rotate(-216deg); }
  // .deg240 { transform: rotate(240deg) translate(200px) rotate(-240deg); }
  // .deg264 { transform: rotate(264deg) translate(200px) rotate(-264deg); }
  // .deg288 { transform: rotate(288deg) translate(200px) rotate(-288deg); }
  // .deg312 { transform: rotate(312deg) translate(200px) rotate(-312deg); }
  // .deg336 { transform: rotate(336deg) translate(200px) rotate(-336deg); }
  

  .circle-container img { display: block; width: 100%; }
  .deg0 { transform: translate(200px); }
  .deg45 { transform: rotate(45deg) translate(200px) rotate(-45deg); }
  .deg90 { transform: rotate(90deg) translate(200px) rotate(-90deg); }
  .deg135 { transform: rotate(135deg) translate(200px) rotate(-135deg); }
  .deg180 { transform: translate(-200px); }
  .deg225 { transform: rotate(225deg) translate(200px) rotate(-225deg); }
  .deg270 { transform: rotate(270deg) translate(200px) rotate(90deg); }
  .deg315 { transform: rotate(315deg) translate(200px) rotate(-315deg); }
`

function FoodList() {
  return (
    <StyledFoodList>
      <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market Near You!</a>
      <br /> <br />

{/* Just placing on the page */}
      {/* <img alt="cherry" src={Cherry}/>
      <img alt="tomato" src={Tomato}/>
      <img alt="carrots" src={Carrots}/>
      <img alt="orange" src={Orange}/>
      <img alt="mango" src={Mango}/>
      <img alt="banana" src={Banana}/>
      <img alt="kiwi" src={Kiwi}/>
      <img alt="avocado" src={Avocado}/>
      <img alt="broccoli" src={Broccoli}/>
      <img alt="cauliflower" src={Cauliflower}/>
      <img alt="blueberries" src={Blueberries}/>
      <img alt="cabbage" src={Cabbage}/>
      <img alt="grapes" src={Grapes}/>
      <img alt="dragonfruit" src={Dragonfruit}/>
      <img alt="watermelon" src={Watermelon}/> */}

{/* Placing images in a circle */}
    <div className='circle-container'>
      
      {/* <Link to="/food">
        <img alt="cherry" src={Cherry} className='deg0'/>
      </Link> */}

      {/* <img src='image.jpg'className='center'/> */}
      {/* <img alt="cherry" src={Cherry} className='deg0'/>
      <img alt="tomato" src={Tomato} className='deg24'/>
      <img alt="carrots" src={Carrots} className='deg48'/>
      <img alt="orange" src={Orange} className='deg72'/>
      <img alt="mango" src={Mango} className='deg96'/>
      <img alt="banana" src={Banana} className='deg120'/>
      <img alt="kiwi" src={Kiwi} className='deg144'/>
      <img alt="avocado" src={Avocado} className='deg168'/>
      <img alt="broccoli" src={Broccoli} className='deg192'/>
      <img alt="cauliflower" src={Cauliflower} className='deg216'/>
      <img alt="blueberries" src={Blueberries} className='deg240'/>
      <img alt="cabbage" src={Cabbage} className='deg264'/>
      <img alt="grapes" src={Grapes} className='deg288'/>
      <img alt="dragonfruit" src={Dragonfruit} className='deg312'/>
      <img alt="watermelon" src={Watermelon} className='deg336'/> */}

      <img alt="cherry" src={Cherry} className='deg0'/>
      <img alt="tomato" src={Tomato} className='deg45'/>
      <img alt="carrots" src={Carrots} className='deg90'/>
      <img alt="orange" src={Orange} className='deg135'/>
      <img alt="mango" src={Mango} className='deg180'/>
      <img alt="banana" src={Banana} className='deg225'/>
      <img alt="kiwi" src={Kiwi} className='deg270'/>
      <img alt="avocado" src={Avocado} className='deg315'/>

    </div>


    </StyledFoodList>
  );
}

export default FoodList;

-------------- backup FoodList logic 5/12/23

      <StyledFoodList>
      <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market Near You!</a>
      <br /> <br />

{/* Just placing on the page */}
      {/* <img alt="cherry" src={Cherry}/>
      <img alt="tomato" src={Tomato}/>
      <img alt="carrots" src={Carrots}/>
      <img alt="orange" src={Orange}/>
      <img alt="mango" src={Mango}/>
      <img alt="banana" src={Banana}/>
      <img alt="kiwi" src={Kiwi}/>
      <img alt="avocado" src={Avocado}/>
      <img alt="broccoli" src={Broccoli}/>
      <img alt="cauliflower" src={Cauliflower}/>
      <img alt="blueberries" src={Blueberries}/>
      <img alt="cabbage" src={Cabbage}/>
      <img alt="grapes" src={Grapes}/>
      <img alt="dragonfruit" src={Dragonfruit}/>
      <img alt="watermelon" src={Watermelon}/> */}

{/* Placing images in a circle, original code */}
    {/* <div class='circle-container'>
        <a href='#' class='center'><img src='image.jpg'/></a>
        <a href='#' class='deg0'><img alt="deg0" src='image.jpg'/></a>
        <a href='#' class='deg45'><img alt="deg45" src='image.jpg'/></a>
        <a href='#' class='deg90'><img alt="deg90" src='image.jpg'/></a>
        <a href='#' class='deg135'><img alt="deg135" src='image.jpg'/></a>
        <a href='#' class='deg180'><img alt="deg180" src='image.jpg'/></a>
        <a href='#' class='deg225'><img alt="deg225" src='image.jpg'/></a>
        <a href='#' class='deg270'><img alt="deg270" src='image.jpg'/></a>
        <a href='#' class='deg315'><img alt="deg315" src='image.jpg'/></a>
    </div> */}


{/* placing images in a circle more angles */}
      <div class='circle-container'>
        {/* <a href='#' class='center'><img src='image.jpg'/></a> */}
        <a href='#' class='deg0'><img alt="deg0" src={Mango}/></a>
        <a href='#' class='deg24'><img alt="deg24" src={Banana}/></a>
        <a href='#' class='deg48'><img alt="deg48" src={Kiwi}/></a>
        <a href='#' class='deg72'><img alt="deg72" src={Avocado}/></a>        
        <a href='#' class='deg96'><img alt="deg96" src={Broccoli}/></a>        
        <a href='#' class='deg120'><img alt="deg120" src={Cauliflower}/></a>        
        <a href='#' class='deg144'><img alt="deg144" src={Blueberries}/></a>        
        <a href='#' class='deg168'><img alt="deg168" src={Cabbage}/></a>        
        <a href='#' class='deg192'><img alt="deg192" src={Grapes}/></a>        
        <a href='#' class='deg216'><img alt="deg216" src={Dragonfruit}/></a>        
        <a href='#' class='deg240'><img alt="deg240" src={Watermelon}/></a>        
        <a href='#' class='deg264'><img alt="deg264" src={Cherry}/></a>        
        <a href='#' class='deg288'><img alt="deg288" src={Tomato}/></a>        
        <a href='#' class='deg312'><img alt="deg312" src={Carrots}/></a>        
        <a href='#' class='deg336'><img alt="deg336" src={Orange}/></a>
      </div>


    </StyledFoodList>