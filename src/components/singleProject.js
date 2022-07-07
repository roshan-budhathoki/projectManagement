import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './sidebar.css'
const SingleProject = ({project, folders }) => {
    let params = useParams();
    const folderId = params.folderName;
    return (
        <div>
            <p className='projectName'>{project.title}</p>
            <ul className='folders'>
                {
                    folders.map((items, index) => (
                        <Link key={index} to={"/folders/" + items.id} style={{textDecoration: "none", color: "#263650"}}>
                            <li key={index} style={{background: `${items.id === folderId ? "#263650" : ""}`, color: `${items.id === folderId ? "whiteSmoke" : ""}`}}>
                                <i className="fas fa-folder" style={{marginRight: "20px"}}></i>{items.title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default SingleProject