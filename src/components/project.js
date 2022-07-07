import React from 'react';
import './project.css';
import SideBar from './sideBar';
import Tasks from './tasks';
import {useParams} from 'react-router-dom'

const Project = () => {
  let params = useParams();
  const folderId = params.folderName;

  return (
    <div className='container'>
      <SideBar />
      <div className='mainProject'>
        <header>
          Project Management
        </header>
        <div className='subContent'>
            <div className='addTask'>
                <button>Add Project</button>
                <button>Add Task</button>
                <button>Add Folder</button>
            </div>
            <div className='priority'>
              <div className='priorityHeader'>
                Priority : 
              </div>
              <div className='parentPriority'>
                <div className='highPriority'></div>
                <div>High</div>
              </div>
              <div className='parentPriority'>
                <div className='lowPriority'></div>
                <div>Low</div>
              </div>
            </div>
        </div>
        {
          folderId && <Tasks/>
        }
      </div>
    </div>
    
  )
}

export default Project