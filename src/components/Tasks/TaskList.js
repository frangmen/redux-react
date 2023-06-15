import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../reducers/actions";
import "../../components/Home/tasklist.css";
import { useState } from "react";

const TaskList = ({ tasks, deleteTask }) => {
    const [editableTask, setEditableTask] = useState(null);
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
                    {/*  {editableTask && editableTask.id === task.id ? (
                        <input
                            type='text'
                            value={editableTask.task}
                            onChange={(e) =>
                                setEditableTask({
                                    ...editableTask,
                                    task: e.target.value,
                                })
                            }
                            onBlur={() => setEditableTask(null)}
                        />
                    ) : (
                        <button onClick={() => handleDeleteTask(task.id)}>
                            Eliminar
                        </button>
                    )} */}
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
