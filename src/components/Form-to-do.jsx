import React, { useState } from "react"; //se importa {} por la propiedad useState de react

//Formulario principal para el crud
const Formtodo = props => { //props es una propiedad de React
    const [description, setDescription] = useState("");
    //Usamos el State para la desc de la tarea y para poner o modificar la desc
    //lee lo que el usuario esta haciendo en mi pag

    const {addItem} = props; //Recibimos el metodo addItem del container desde el props
    //asi no es necesario importar todo el contenedor

    const handleSubmit = e => { 
        /*Esta funcion quita la actualizacion de la pagina, 
        identifica el estado del "done" y quita el texto del cuadro de texto al ser enviado*/
        //e se convierte en el form por que se hace referencia asi mismo
        e.preventDefault();//Quita el comportamiento default del formulario 
        //cada vez que se manda se actualiza la pagina lo quita y ahora no se actualiza
        console.log(description);

        addItem({ //incializamos una funcion donde se la manda el estado del "done" false o true
            //esto es un objeto
            done: false, //item que aun no se a añadido
            id: (+new Date()).toString(), //id unico basado en la fecha
            description //el texto que le haya puesto el usuario
        });

        setDescription(""); //Cada vez que se manda el texto de la desc se reinicia
    }

    return (
        <form onSubmit={handleSubmit} /*Para adjuntar handlesubmit con el form*/>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                    type="text" 
                    className="text" 
                    value={description} 
                    /*description es la constante que almacena lo que el usuario escriba en el input text*/
                    /*e hace referencia al elemento actual es decir asi mismo. 
                    e esta dentro de un input hace referencia al mismo input*/

                    onChange={e => setDescription(e.target.value)} //evento de que un elemento ha sido modificado
                    /*Cuando se cambie el estado del input text escribe en la setDesc lo que el usuario diga*/
                    /*e.target.value es lo que esta escribiendo el usuario para luego mandarlo a otro lado*/
                />
                <button
                    className="button pink"
                    disabled={description ? "" : "disabled"} // ? Es un operador ternario. Es un if en una sola linea
                    /*si el campo description esta vacio activalo si no no la actives*/
                    /*
                    if (Descripcion == ""){
                        disabled = "disabled"
                    } else {
                        disabled = ""
                    }
                    */
                > 
                Agregar Tarea
                </button>

                </div>
            </div>
        </form>
    );
};

export default Formtodo;