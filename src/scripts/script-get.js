// const url = 'https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid={4d04b0dc4b016dbde26edb8ae6abd73a}&units=metric';

// const obterTemp = () =>{

//   fetch(url)
//         .then(resposta =>{
//           // console.log(resposta)
//           return resposta.json()
//         })
//           .then(dados =>{
//             console.log(dados)
//           })
//           .catch(erro => {
//             console.log(erro)
//           })
//  }

const obterTemp = () =>{

    const nome = document.querySelector('#name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nome}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;

    fetch(url)
      .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
      })
        .then(dados =>{
          console.log(dados);

          document.querySelector('#temp').value = dados.main.temp + ' °C';
        })
        .catch(erro => {
          console.log(erro);
          alert('Coloca a cidade, burro!');
        })
  }