
const randomBtn =  document.getElementById('random');
const ranQuote =  document.getElementById('ranQuote');
const adviceID =  document.getElementById('adviceID');



const getRandomQuote = (event) => {
    // fetch('https://api.adviceslip.com/advice').then( response =>{
    //     console.log(response);
    // })

    fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    randomBtn.setAttribute('class','anime');
    ranQuote.innerText = data.slip.advice;
    adviceID.innerText = '#'+data.slip.id;
    })
  .catch((error)=> console.log(error));

  }

  randomBtn.addEventListener("animationend", function() {
    randomBtn.removeAttribute('class','anime');
  }, false);



window.onload= () =>{
    getRandomQuote();
  }

  randomBtn.addEventListener( 'click',()=>{
    getRandomQuote();
  })





  