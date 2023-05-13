import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

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



const StyledFoodList = styled.div`
  img {
    height: 100px;
  }

  // .place_list {
  //   position: absolute;
  //   z-index: 1;
  //   padding: 20px;
  //   box-shadow: 0px 8px 10px 0px #0000002b;
  // }

  .circle-container {
    position: relative;
    width: 500px;
    height: 500px;
    // padding: 20px;
    border: solid 1px;
    border-radius: 50%;
    margin: 50px auto;
  }
  .circle-container a {
    display: block;
    position: absolute;
    top: 40%; 
    left: 40%;
    // width: 70px; 
    // height: 70px;
    // margin: -10px;
  }
// Original code  
  // .circle-container img { display: block; width: 100%; }
  // .deg0 { transform: translate(200px); } /* 12em = half the width of the wrapper */
  // .deg45 { transform: rotate(45deg) translate(200px) rotate(-45deg); }
  // .deg90 { transform: rotate(90deg) translate(200px) rotate(-90deg); }
  // .deg135 { transform: rotate(135deg) translate(200px) rotate(-135deg); }
  // .deg180 { transform: translate(-200px); }
  // .deg225 { transform: rotate(225deg) translate(200px) rotate(-225deg); }
  // .deg270 { transform: rotate(270deg) translate(200px) rotate(90deg); }
  // .deg315 { transform: rotate(315deg) translate(200px) rotate(-315deg); }

  // More angles -- all adjusted because of item shape
.circle-container img { display: block; width: 100%; }
  .deg0 { transform: translate(250px); }
  .deg24 { transform: rotate(19deg) translate(250px) rotate(-19deg); }
  .deg48 { transform: rotate(44deg) translate(250px) rotate(-44deg); }
  .deg72 { transform: rotate(66deg) translate(250px) rotate(-66deg); }
  .deg96 { transform: rotate(94deg) translate(250px) rotate(-94deg); }
  .deg120 { transform: rotate(126deg) translate(250px) rotate(-126deg); }
  .deg144 { transform: rotate(150deg) translate(250px) rotate(-150deg); }
  .deg168 { transform: rotate(174deg) translate(250px) rotate(-174deg); }
  .deg192 { transform: rotate(196deg) translate(250px) rotate(-196deg); }
  .deg216 { transform: rotate(220deg) translate(250px) rotate(-220deg); }
  .deg240 { transform: rotate(248deg) translate(250px) rotate(-248deg); }
  .deg264 { transform: rotate(274deg) translate(250px) rotate(-274deg); }
  .deg288 { transform: rotate(296deg) translate(250px) rotate(-296deg); }
  .deg312 { transform: rotate(316deg) translate(250px) rotate(-316deg); }
  .deg336 { transform: rotate(336deg) translate(250px) rotate(-336deg); }
  
`

function FoodList() {

  let { id } = useParams();
  const[foodState, setFoodState] = useState(null);
  const[errorState, setErrorState] = useState(null);
  const[loadedState, setLoadedState] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/foods`)
    .then(response => {
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setFoodState(jsonifiedResponse);
      setLoadedState(true);
    })
    .catch((error) => {
      setErrorState(error.message);
    });
  }, [])

  if(errorState) {
    return <h1>Error: {errorState}</h1>;
  } else if (!loadedState) {
    return <h1>...Loading...</h1>;
  } else {
    return (

      <StyledFoodList>
        <a href="https://www.usdalocalfoodportal.com/fe/fdirectory_farmersmarket/?source=fe&directory=farmersmarket&location=&x=&y=">Find a Farmers Market Near You!</a>
        <br /> <br />

        {/* Placing images in a circle */}
        <div class='circle-container'>
          <Link to="/foods/5">
          <img alt="deg0" src={Mango} className="deg0"/>
          </Link>

          <Link to="/foods/6">
          <img alt="deg24" src={Banana} className="deg24"/>
          </Link>

          <Link to="/foods/7">
          <img alt="deg48" src={Kiwi} className="deg48"/>
          </Link>

          <Link to="/foods/8">
          <img alt="deg72" src={Avocado} className="deg72"/>
          </Link>

          <Link to="/foods/9">
          <img alt="deg96" src={Broccoli} className="deg96"/>
          </Link>

          <Link to="/foods/10">
          <img alt="deg120" src={Cauliflower} className="deg120"/>
          </Link>
          
          <Link to="/foods/11">
          <img alt="deg144" src={Blueberries} className="deg144"/>
          </Link>    

          <Link to="/foods/12">
          <img alt="deg168" src={Cabbage} className="deg168"/>
          </Link>

          <Link to="/foods/13">
          <img alt="deg192" src={Grapes} className="deg192"/>
          </Link>

          <Link to="/foods/14">
          <img alt="deg216" src={Dragonfruit} className="deg216"/>
          </Link>

          <Link to="/foods/15">
          <img alt="deg240" src={Watermelon} className="deg240"/>
          </Link>

          <Link to="/foods/1">
          <img alt="deg264" src={Cherry} className="deg264"/>
          </Link>

          <Link to="/foods/2">
          <img alt="deg288" src={Tomato} className="deg288"/>
          </Link>

          <Link to="/foods/3">
          <img alt="deg312" src={Carrots} className="deg312"/>
          </Link>

          <Link to="/foods/4">
          <img alt="deg336" src={Orange} className="deg336"/>
          </Link>
        </div>

    </StyledFoodList>

    );
  }
}

export default FoodList;