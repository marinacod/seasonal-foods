import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function FoodDetail() {

  let { id } = useParams();
  const[foodState, setFoodState] = useState(null);
  const[errorState, setErrorState] = useState(null);
  const[loadedState, setLoadedState] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/foods/${id}`)
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

      <React.Fragment>
        <h1>{foodState.name}</h1>
        <h3>When is it in season?</h3>
        <p>{foodState.harvestSeason}</p>
        <h3>Where does it generally grow?</h3>
        <p>{foodState.geography}</p>
        <h3>Popular uses:</h3>
        <p>{foodState.popularUses}</p>
        <h3>Sample recipe:</h3>
        <p>{foodState.sampleRecipe}</p>
      </React.Fragment>
    );
  }


}

export default FoodDetail;