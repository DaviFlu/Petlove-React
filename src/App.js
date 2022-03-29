import React, {Component} from 'react'
import './App.css'
import dog1 from './img/dog1.jpg'
import dog2 from './img/dog2.jpg'
import dog3 from './img/dog3.jpg'
import cat1 from './img/cat1.jpg'
import cat2 from './img/cat2.jpg'
import cat3 from './img/cat3.jpg'
import fundo from './img/fundo.jpg'
class App extends Component{

  state = {
    caes:[
      {
        nome:"Fred",
        imagem:<img src={dog1} alt="dog1"/>
      },
      {
        nome:"Toby",
        imagem:<img src={dog2} alt="dog2"/>
      },
      {
        nome:"Frida",
        imagem:<img src={dog3} alt="dog3"/>
      }
    
    ],
    gatos:[
      {
        nome:"Ares",
        imagem:<img src={cat1} alt="cat1"/>
      },
      {
        nome:"Muffie",
        imagem:<img src={cat2} alt="cat2"/>
      },
      {
        nome:"Pituca",
        imagem:<img src={cat3} alt="cat3"/>
      }
    ],
    list: []
  }

/*---------------------------------------------------------------*/
  dogList = () => {
    this.setState({list: this.state.caes.map((item) => (
      <div className="containerPetDog">
        <div className="nameDog">
          <h3>Dog's name: {item.nome}</h3>
        </div>
        <div className="imgDogs">
          {item.imagem}
        </div>
      </div>
    ))})
  }

  catList = () => {
    this.setState({list: this.state.gatos.map((item) => (
      <div className="containerPetCat">
        <div className="nameCat">
          <h3>Cats name: {item.nome}</h3>
        </div>
        <div className="imgCats">
          {item.imagem}
        </div>
      </div>
    ))})
  }
/*---------------------------------------------------------------*/
  render(){
    return(
      <div className="container">
        <div className="teste">
          <img className="imgFundo" src={fundo} alt="fundo"/>
          <div className="titulo">
            <h1>PET ADOPTION</h1>
          </div>
          <div className="fraseheader">
            <h3>Adote, porque o amor não tem preço nem raça.</h3>
          </div>
          <main>
            <div className="containerbuttons">
              <button onClick={this.dogList}>Cães</button>
              <button onClick={this.catList}>Gatos</button>
            </div>
            <div className="pets">
              <h3>{this.state.list}</h3>
            </div>
          </main>
        </div>
        <footer>
            <div className="rodape">
              <p>Feito por: Davi Soares</p>
              <p><strong>Vai na Web - PetLove Adoption</strong></p>
            </div>
          </footer>
      </div>
      
    )
  }

}

export default App