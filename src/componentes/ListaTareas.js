import React from 'react';
import Tarea from './Tarea'

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) => {
        //La función cambiarTareas no solo te permite agregar nuevas tareas sino que te permite sobreescribir las existentes
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                //Dejando todos los valores de la tarea igual pero modificando el valor "completada"
                return {...tarea, completada: !tarea.completada }
            }
            return tarea;
        }))
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }))
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea; 
            }
            return;
        }));
    }

    return ( 
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                if (mostrarCompletadas) {
                    return <Tarea 
                                key={tarea.id}
                                tarea={tarea}
                                toggleCompletada={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                            />  
                }
                else if (!tarea.completada) {                 
                    return <Tarea 
                                key={tarea.id}
                                tarea={tarea}
                                toggleCompletada={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                            /> 
                }
                // eslint-disable-next-line
                return;
            })
            : <div className="lista-tareas__mensaje">~ No hay tarea agregadas ~</div>
        }
        </ul>
     );
}
 
export default ListaTareas;