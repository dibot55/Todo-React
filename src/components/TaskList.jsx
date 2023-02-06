import React from "react";
import Checkbox from "./CheckBox";

//Contenedor para la lista de tareas

const Tasklist = props => {

    const {list, setList} = props; //destructurar propiedades y asignar a los props que estamos
    //asi no usamos this.props.nombre de la propiedad definida en otro contenedor.
    //ya no usa useState si no de props por que en Container se le paso el estado

    const onChangeStatus = e => { //Esto es un Event Listener 
        /*cada vez que se cambie el estatus se agrega un elemento a la lista o se le quita un elemento a la lista
        Este es el encargado de actualizar la lista*/
        const {name, checked} = e.target; //esto es igual a mi mismo para obtener el html que necesita
        const updateList = list.map(item => ({//.map permite realizar una funcion por cada elemento del array 
            //y devuelve un arreglo o lista ya procesado
            ...item,
            done: item.id === name ? checked : item.done //operador Terniario
        }));
        setList(updateList); //nos va a devolver un listado ya actualizado
    };

    const onClickRemoveItem = e => { //borra los items no terminados
        const updateList = list.filter(item => !item.done);
        //filtra los que estan done = true que por defecto es false. lo filtramos usando el !. 
        /*para filtrar los que no estan terminados devulve solo los que no estan "done" 
        (los que no se les dio click al checkbox) */
        setList(updateList); //actualizamos la lista con el filter
    };

    const checkbox = list.map(item => ( //agrega un objeto chekbox
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/> 
        //se va a estar actualizando por el onChangeStatus en tiempo real por evento onChange
        //cada item va a ser checkbox y la data es el mismo item
    )); 
    /*el .map nos va a ayudar a iterar sobre todos los valores de el arreglo list para
    devolverlos ya procesados */

    return (
        <div className="todo-list" /*ventajas de react puedes declarar directamente el arreglo list*/ 
        /*Validamos si la lista no tiene nada entonces nos dice "no hay tareas" 
        pero si nos dice algo nos genera el elemento checkbox*/>
            {list.length ? checkbox : "No hay tareas"}
            {list.length ? ( 
                //puedes declarar codigo html dentro del operador ternario con un ()

                //si hay valores entonces muestra un boton para eliminarlos si no muestra un null, osea nada
                <p>
                    <button className="button pink" onClick={onClickRemoveItem} /*borra los items*/>
                        Delate
                    </button>
                </p>
            ): null}
        </div>
    );
};

export default Tasklist;