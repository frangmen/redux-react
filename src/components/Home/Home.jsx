import React from "react";
import Button from "../Button";
import TaskList from "../Tasks/TaskList";
import AddTask from "../Tasks/AddTask";
import "./tasklist.css";

const Home = () => {
    return (
        <div>
            <Button />
            <div className='tasklist'>
                <TaskList />
            </div>
            <AddTask />
        </div>
    );
};

export default Home;
