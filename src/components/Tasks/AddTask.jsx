import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../reducers/actions";

const AddTask = ({ dispatch }) => {
    const [task, setTask] = useState("");
    console.log("🚀 ~ file: AddTask.jsx:7 ~ AddTask ~ task:", task);

    const handleAddTask = () => {
        dispatch(addTask(task));
        setTask("");
    };

    return (
        <div>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
    );
};

export default connect()(AddTask);
