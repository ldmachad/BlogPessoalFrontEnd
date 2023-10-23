import './Home.css'

function Home() {
  return (
    <>
      <header>
        <div className="header">
        <h1>BLOG PESSOAL</h1> 
        <ul>
          <li><a href="#">Postagens</a></li>
          <li><a href="#">Temas</a></li>
          <li><a href="#">Cadastrar tema</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
        </div>

        <div className="container">

          <div className="txt-buttons">

        <div className="txt-container">
          <h1>Seja bem vinde!</h1>
          <p>Expresse aqui seus pensamentos e opiniões</p></div>
        <div className="buttons">
          <button className='novapostagem'>Nova postagem</button>
          <button className="verpostagem">Ver postagens</button>
        </div>

        </div>
        
        <div className="img"><img src="https://i.imgur.com/VpwApCU.png" alt=""/></div>
        </div>
      </header>             
    </>
  )
}

export default Home