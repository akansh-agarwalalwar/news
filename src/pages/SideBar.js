import React from 'react'
import { MdOutlineBusiness} from "react-icons/md";
import './sideBar.css';
export const SideBar = ({active,setActive,setCategory}) => {
  const links=[
    { id:1,logo: {
      MdOutlineBusiness
  }, name:"General" ,value:"general"},
    { id:2, name:"Business" ,value:"business"},
    { id:3, name:"Entertainment" ,value:"entertainment"},
    { id:4, name:"Health" ,value:"health"},
    { id:5, name:"Science" ,value:"science"},
    { id:6, name:"Sports" ,value:"sports"},
    { id:7, name:"Technology" ,value:"technology"},
  ]
  function onClick(id,value){
    setActive(id)
    setCategory(value)
  }
  return (
    <div className='sideBar'>
      <p style={{textDecoration:"3px brown underline"}}>Category</p>
      <ul>
        {links.map(link=>(
        <li  key={link.id}
          className={active === link.id ? "active" :"inactive"}
          onClick={()=>onClick(link.id,link.value)}>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

