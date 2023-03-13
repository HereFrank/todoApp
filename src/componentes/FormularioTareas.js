import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, cambiarTareas}) => {
    //inputTarea será la variable que guardará y hará seguimieno a todo lo que coloques en el input. Será una variable dinámica que cambiara conforme a cambie lo que existe dentro del input
    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (event) => {
        cambiarInputTarea(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
        
        cambiarInputTarea('');

    }
    return ( 
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            //Estos dos valores son los que te permiten agregar las nuevas tareas
            value={inputTarea}
            onChange={(event) => handleInput(event)} />
            <button 
            type="submit"
            className="formulario-tareas__btn">
            <FontAwesomeIcon 
            icon={faPlusSquare} 
            className="formulario-tareas__icono-btn"/>
            </button>
        </form>
     );
}
 
export default FormularioTareas;