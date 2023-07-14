import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../reducers/actions";
import "../../components/Home/tasklist.css";
import { useState } from "react";

const TaskList = ({ tasks, deleteTask }) => {
    const [editableTask, setEditableTask] = useState(null);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deleteButtonActive, setDeleteButtonActive] = useState(false);

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
    };

    const toggleDeleteMode = () => {
        setDeleteMode(!deleteMode);
    };

    const toggleDeleteButton = () => {
        setDeleteButtonActive(!deleteButtonActive);
        if (!deleteButtonActive) {
            setDeleteMode(false);
        }
    };

    const handleCopyTask = (task) => {
        navigator.clipboard.writeText(task);
    };

    return (
        <div>
            <button onClick={toggleDeleteMode}>
                {deleteMode ? "Desactivar Eliminar" : "Activar Eliminar"}
            </button>
            <ul>
                {tasks.map((task) => (
                    <li
                        className='tasks'
                        key={task.id}
                        onClick={() => handleCopyTask(task.task)}>
                        {task.task}
                        {editableTask && editableTask.id === task.id ? (
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
                            deleteMode && (
                                <button
                                    onClick={() => handleDeleteTask(task.id)}>
                                    Eliminar
                                </button>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
const mapDispatchToProps = {
    deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
