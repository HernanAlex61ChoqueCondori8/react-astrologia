import arrow from '.././images/down-arrow.png';
import React from 'react';

/* fetch("./horoscope.json")
  .then(res => res.json())
  .then(data => console.log(data)); */

function ZodiacInfo(){
  return (
    <div className="zodiac-info">
    </div>
  );
}

function Zodiac(props){
  const showPredictionInfo = () => {
    console.log("Prediction");
  };

  return (
    <div className="zodiac">
      <h3 className="zodiac__title">Signo</h3>
      <img className="zodiac__img" alt="zodiac" src={props.imgState.valueImgZodiac}></img>
      <p className="zodiac__text">{props.textState.valueTextZodiac}</p>
      <div className="zodiac__show">
        <button 
        className="zodiac__more" 
        onClick={() => { showPredictionInfo() }}>
          <img className="zodiac__more-img" alt="show more" src={props.imgArrow}></img>
        </button>
        <ZodiacInfo></ZodiacInfo>
      </div>
    </div>
  );
}

function Prediction(){
  return (
    <div className="prediction">
      <h3 className="prediction__title">Tu prediccion de hoy</h3>
      <p className="prediction__text"></p>
    </div>
  );
}

function Horoscope(props){
  return (
    <div className="horoscope">
      <Zodiac 
        textState={props.textZodiacState}
        imgState={props.imgZodiacState}
        imgArrow={arrow}>  
      </Zodiac>
      <Prediction></Prediction>
    </div>
  );
}

export default Horoscope;