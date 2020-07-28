import Foto from './components/Foto.js';

function App (){
  return (
    `<div>
      <h1>
        Configuracion exitosa!
        ${Foto()}
      </h1>
    </div>`
  )
}

ReactDOM.render(App(), document.getElementById("app-root"));