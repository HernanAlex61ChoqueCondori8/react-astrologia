const getCards = () => {
  return new Promise((resolve, reject) => {
    let dataCard = fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/suits/wands")
    .then(res => res.json());

    if(dataCard.length === 0) {
        reject(new Error("No hay cartas para mostrar"));
    }

    resolve(dataCard);
  });
}

const getZodiac = () => {
  return new Promise((resolve, reject) => {
    let dataZodiac = fetch("./horoscope.json")
    .then(res => res.json());

    if(dataZodiac.length === 0) {
        reject(new Error("No hay cartas para mostrar"));
    }

    resolve(dataZodiac);
  });
}

export { getCards, getZodiac };

/* getCards()
  .then(cards => console.log(cards))
  .catch(err => console.log(err.message)); */