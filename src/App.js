import './App.css';
import React from 'react';
import icon_moon from './images/luna.png';
import Presentation from './components/Presentation.js'
import Header from './components/Header.js'
import Horoscope from './components/Horoscope.js'
import FormUser from './components/FormUser.js'

function App() {
  const [valueTextZodiac, setTextZodiac] = React.useState('?');
  const [valueImgZodiac, setImgZodiac] = React.useState('#');
  const [valueNameZodiac, setNameZodiac] = React.useState('El señor X');

  return (
    <div className="App">
      <Header icon={icon_moon}></Header>
      <Presentation></Presentation>
      <FormUser
        nameZodiacState={{valueNameZodiac, setNameZodiac}}
        textZodiacState={{valueTextZodiac, setTextZodiac}}
        imgZodiacState={{valueImgZodiac, setImgZodiac}}>
      </FormUser>
      <div className="user-horoscope">
      <Horoscope 
        nameZodiacState={{valueNameZodiac, setNameZodiac}}
        textZodiacState={{valueTextZodiac, setTextZodiac}}
        imgZodiacState={{valueImgZodiac, setImgZodiac}}>  
      </Horoscope>
      </div>
    </div>
  );
}

export default App;
