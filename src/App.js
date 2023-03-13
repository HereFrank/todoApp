import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas'

const App = () => {
  //Comprobando si de verdad se tiene un valor en localstorage y asignandolo a "tareasGuardadas"
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];
  //"tareas" será un array dinámico que cambiará conforme a se vayan agregando nuevas tareas al momento de presionar el boton "+"
  //Cada vez que recargues tu página el estado inicial de tus tareas estará establecido por este hook
  //Estableciendo el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas)
  //Esta función se ejecutará una primera vez y cuando haya un cambio de estado de "tareas"
  //Por lo que esta función depende de tareas y guardará en el localStorage las mismas
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas]);


  //Accedemos a mostrarCompletadas y se comprueba si mostrarCompletadas tiene un valor null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    //Se usa este enfoque para de esa manera colocar un valor booleano en la variable "mostrarCompletadas"
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }
  //El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas)

  //Guardando en el localStorage
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
  }, [mostrarCompletadas]);
  
  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
