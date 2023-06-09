const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const updatedTasks = [...state.tasks, action.payload];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks,
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default taskReducer;
