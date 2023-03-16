import React, { Fragment } from "react";

//contenedor de checkbox para palomear cada tarea

const Checkbox = props => { //con el props vamos a recibir la data

    const {
        onChange,
        data: {id, description, done} //definimos el dato recibido del props
    } = props;

    return (<Fragment /*recrea muchos elementos sin necesidad de añadir uno nuevo <div>*/>

        <label className="todo new-item">
            <input 
            type="checkbox" 
            className="todo_state" 
            name={id} //props de tasklist
            defaultChecked={done} //props de tasklist
            onChange = {onChange} //evento de tasklist onChangeStatus
            />

            <div className="todo_text" /* Escribe en el checkbox lo que escribiste en el imput text */>
            {description}
            </div>
        </label>
    </Fragment>);
};

export default Checkbox;