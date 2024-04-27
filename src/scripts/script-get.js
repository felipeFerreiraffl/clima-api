const obterTemp = () =>{
    // Declaração do nome do input
    const nome = document.querySelector('#name').value;
    // Seleção de uma cidade ao digitar no input
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nome}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;

    fetch(url)
      .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
      })
        .then(dados =>{
          console.log(dados);

          // Ao colocar o nome, aparecerá a temperatura atual no output
          document.querySelector('#temp').value = dados.main.temp + ' °C';
        })
        .catch(erro => {
          console.log(erro);
          // Caso não seja colocado o nome no output
          alert('Coloca uma cidade, burro!');
        })
  }