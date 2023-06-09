const generateUniqueId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: { id: generateUniqueId(), task: task },
});
export const deleteTask = (taskId) => ({
    type: "DELETE_TASK",
    payload: taskId,
});
