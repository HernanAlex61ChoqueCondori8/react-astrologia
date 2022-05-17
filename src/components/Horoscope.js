import './Horoscope.css';
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
      <h3 className="zodiac__title"> Hola {props.nameState.valueNameZodiac}, tu signo es</h3>
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

function Prediction(props){
  const changePrediction = () => {
    fetch("./horoscope.json")
    .then(res => res.json())
    .then(data => {
      const dataGender = document.querySelector("#user-gender");
      const signZodiac = props.sign.valueTextZodiac;
      const dataPrediction = data.zodiac.find(sign => {
        return sign.name.toLowerCase() === signZodiac.toLowerCase() ;
      });
      
      if(parseInt(dataGender.value) === -1){
        alert("Rellenar formulario");
      }
      else{
        props.prediction.setPrediction(dataPrediction.horoscope[dataGender.value].prediction);

        const predictionContent = document.querySelector(".prediction__today");
        predictionContent.classList.toggle("prediction__today--show");
      }
    });
  }
  return (
    <div className="prediction">
      <button 
      className="prediction__title"
      onClick={()=>( changePrediction() )}>
        Prediccion
        <div className="prediction__line"></div>
      </button>
      <div className="prediction__today">
        <p className="prediction__text">{props.prediction.valuePrediction}</p>
      </div>
    </div>
  );
}

function Horoscope(props){
  const [valuePrediction, setPrediction] = React.useState('???');

  return (
    <div className="horoscope">
      <Zodiac 
        textState={props.textZodiacState}
        imgState={props.imgZodiacState}
        nameState={props.nameZodiacState}
        imgArrow={arrow}>  
      </Zodiac>
      <Prediction
        sign={props.textZodiacState}
        prediction={{valuePrediction, setPrediction}}></Prediction>
    </div>
  );
}

export default Horoscope;