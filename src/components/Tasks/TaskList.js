import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../reducers/actions";
import "../../components/Home/tasklist.css";

const TaskList = ({ tasks, deleteTask }) => {
    console.log("🚀 ~ file: TaskList.js:6 ~ TaskList ~ tasks:", tasks);
    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
    };

    const handleCopyTask = (task) => {
        navigator.clipboard.writeText(task);
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li
                    className='tasks'
                    key={task.id}
                    onClick={() => handleCopyTask(task.task)}>
                    {task.task}
                    {/*  <button onClick={() => handleDeleteTask(task.id)}>
                        Eliminar
                    </button> */}
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
const mapDispatchToProps = {
    deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
