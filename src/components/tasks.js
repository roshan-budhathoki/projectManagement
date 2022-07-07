import React, {useState, useEffect} from 'react'
import './task.css'
import { useParams} from 'react-router-dom'
import axios from 'axios';

const Tasks = () => {
    let params = useParams();
    const folderId = params.folderName;
    const[tasks, setTask] = useState([]);
    const task = async() => {
        const task = await axios.get(`http://localhost/backend/?api=folder&id=${folderId}`).then((res) => res.data.data);
        setTask(task);
    }
    useEffect(()=> {
        task();
    }, [folderId]);

    return (
        <div className='taskList'>
            <p>List of Task</p>
            <ul className='listTask'>
                {
                    tasks.map((items, index) => (
                        <li key={index}>
                            <div>
                                <i className="fas fa-tasks" style={{marginRight: "2rem",  color: "orange"}}></i>
                                {items.title}
                            </div>
                            <div>
                                <button style={{color: "orange"}}>View Details</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
            
        )
}

export default Tasks