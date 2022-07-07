import React, {useEffect, useState} from 'react';
import SingleProject from './singleProject';
import axios from 'axios';
import './sidebar.css';

const SideBar = () => {
    const[folders, setFolders] = useState([]);
    const[project, setProject] = useState([]);
    const projects = async() => {
        const project  = await axios.get('https://backend.thexpresstimes.com/?api=project&id=1').then((res) => res.data.data);
        setFolders(project.folders);
        setProject(project.project);
    } 
    useEffect(() => {
        projects();   
    }, []);
    return (
        <div className='sideBar'>
            <p className='heading'>Projects</p>
            <div>
                <SingleProject project={project} folders={folders}/>
            </div>
        </div>
    )
}

export default SideBar