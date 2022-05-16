import './App.css';
import React from 'react';
import Presentation from './components/Presentation.js'
import Header from './components/Header.js'
import Horoscope from './components/Horoscope.js'
import icon_moon from './images/luna.png';

function FormData(){
  return (
    <div className="form-data">
      <label className="form-data__label">Nombre</label>
        <input type="text" className="form-data__input"></input>
      <label className="form-data__label">Edad</label>
        <input type="number" className="form-data__input"></input>
      <label className="form-data__label">Genero</label>
        <select name="genero" className="form-data__input">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      <label className="form-data__label">Fecha de nacimiento</label> 
        <input id="user-date" type="date" className="form-data__input"></input>
    </div>
  );
}

function convertToDate(date){
  const splitDate = date.split("/");
  const year = new Date().getFullYear();

  return new Date(year,splitDate[1] - 1,parseInt(splitDate[0]) + 1);
}

function getZodiacSign(data, month, day){
  return data.zodiac.find(sign => {
    const dateStart = convertToDate(sign.startDate);
    const dateFinish = convertToDate(sign.finishDate);
    const dateUser = convertToDate(`${day}/${month}`);
    
    if(dateStart.getMonth() < 11){
      return dateUser >= dateStart && dateUser <= dateFinish;
    }

    const lastDayOfYear = new Date(new Date().getFullYear(),11,31);
    const firstDayOfYear = new Date(new Date().getFullYear(),0,1);

    return (dateUser >= dateStart && dateUser <= lastDayOfYear) || 
          (dateUser >= firstDayOfYear && dateUser <= dateFinish);
  });
}

function changeSignAndImgHoroscope(zodiac, month, day){
  fetch("./horoscope.json")
  .then(res => res.json())
  .then(data => {
    const userZodiac = getZodiacSign(data, parseInt(month) + 1, parseInt(day) + 1);
    console.log(userZodiac);
    zodiac.textZodiacState.setTextZodiac(userZodiac.name);
    zodiac.imgZodiacState.setImgZodiac(`./images/${userZodiac.name}.png`);
  });
}


function FormUser(props){
  const changeDataHorosocope = ()=>{
    const formDate = document.querySelector("#user-date");
    console.log(formDate.value);
    const userDate = new Date(formDate.value);
    console.log(userDate);
    console.log(userDate.getMonth() + " - " + userDate.getDate());
    changeSignAndImgHoroscope(props, userDate.getMonth(), userDate.getDate());
  }

  return (
    <div className="form-user">
      <h3 className="form-user__title">Dejeme conocerte un poco mas sobre ti</h3>
      <FormData></FormData>
      <button 
        className="form-user__request"
        onClick={()=>{ changeDataHorosocope(); }}>! Muestrame mi horoscopo ¡</button>
    </div>
  );
}

function App() {
  const [valueTextZodiac, setTextZodiac] = React.useState('?');
  const [valueImgZodiac, setImgZodiac] = React.useState('#');

  return (
    <div className="App">
      <Header icon={icon_moon}></Header>
      <Presentation></Presentation>
      <FormUser 
        textZodiacState={{valueTextZodiac, setTextZodiac}}
        imgZodiacState={{valueImgZodiac, setImgZodiac}}>
      </FormUser>
      <Horoscope 
        textZodiacState={{valueTextZodiac, setTextZodiac}}
        imgZodiacState={{valueImgZodiac, setImgZodiac}}>  
      </Horoscope>
    </div>
  );
}

export default App;
