import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../reducers/actions";

const AddTask = ({ dispatch }) => {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        dispatch(addTask(task));
        setTask("");
    };

    return (
        <div>
            <textarea
                style={{
                    width: "90%",
                    height: "200px",
                    textAlign: "justify",
                    marginLeft: "20px",
                }}
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
    );
};

export default connect()(AddTask);
