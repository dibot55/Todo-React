import React, { useState } from "react";
import Formtodo from './Form-to-do';
import Tasklist from './TaskList';

//Conector de todos nuestros componentes

//Funcion anonima declarada como asignacion de una constante
const Container = () => {

    const [list, setList] = useState([]); //hook de estado actual de la pagina 
    /*
    -----------------------useState--------------------------- 
    
    --"list" es el valor por defecto que se muestra en el DOM
    --"setList" es la variable que usamos para modificar ese valor de list
    --el useState([]) le indicamos que "list" es un arreglo/array

    setList no hace nada pero es un intermediario para modificar "list" 
    y en este caso se le da la funcion de actualizar el arreglo de "list" cuando hacemos 
    setList(updateList) en el TaskList.js
    */

    const addItem = addItem => { //la funcion addItem se puede acceder por medio del promps
        setList([...list, addItem]);//actualiza automaticamente el list
    };
    return(
        <div>
            <Formtodo addItem = {addItem} /*se le pasa el addItem al form to do como propiedad del contenedor*/ />
            <Tasklist list = {list} setList = {setList} /*Le estamos pasando el useState a nuestro Tasklist
            como propiedad del contenedor*/ />
        </div>
    );
};

export default Container;