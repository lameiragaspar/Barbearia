import React,{useState} from "react"
import './App.css';
import './estilos/main.css';
import './estilos/styleDark.css'

const App = () =>{

    {/*Classes dos componentes Pais*/}

    const paiDark = 'paiDark'
    const paiLight = 'paiLight'
    const [pai, setPai] = useState(true)

    const [mode, setMode] = useState(true)

    {/*Função que altera as variaveis de estado com um clique*/}
    function AlteraTema(){
        setPai(!pai)
        setMode(!mode)
    }
    /*Imagens e textos do botão*/
    let texto
    let imagem 
    if(mode){
        imagem = <img className="imgButton" src="/assets/moon.png"/>
        texto = 'Dark'
    }else{
        imagem = <img className="imgButton" src="/assets/sun.png"/>
        texto= 'Light'
    }

    return(
      <>
        <header className={pai ? paiLight : paiDark}>
          <div className="tam-max">
            <img className="logo" src="/assets/barbearia-logo.png"/>
            <button onClick={AlteraTema} className='botao'>
                <div className="imagem">
                    {imagem}
                </div>
                <p className="texto">{texto}</p>
            </button>
          </div>
        </header>

        <main className={pai ? paiLight : paiDark}>
          <section className="banner">
              {/*Imagem de fundo*/}
          </section>
          <section className="conteudo">
              <div className="tam-max">
                  <h1> 
                      Bem-vindo a Barber Shop
                  </h1>
                  <p>
                      Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                  </p>
                  <p>
                      Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                  </p>
                  <span>S. Kelly</span>
              </div>
          </section>
        </main>
      </>
    )
}
export default App;