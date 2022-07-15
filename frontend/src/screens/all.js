import React, { useState, useEffect } from "react";

import axios from "./axios";
import './all.css'
import { Link } from "react-router-dom";



function All(){
  const[employeeList, setEmployeeList]= useState([])



  const getEmployees=()=>{
    axios.get('/allemployees').then((res)=>{
        setEmployeeList(res.data)
        
        
    })}

    useEffect(()=>{
        getEmployees();
    })
    
    function deleteEmployees(uid){
       if( (window.confirm('are you sure ?')))
        axios.delete(`/delete/${uid}`)
      getEmployees();l
        

    }





return(
    <div> 
        {employeeList.map((val) => {
        return (
            <> <div className="card" id="emp--card" >
                 <ul class="list-group list-group-flush">
    <li class="list-group-item">UID: {val.uid} </li>
    <li class="list-group-item">Name: {val.e_name} </li>
    <li class="list-group-item">Age: {val.age} </li>
    <li class="list-group-item">Country: {val.country} </li>
    <li class="list-group-item">Position: {val.position} </li>
    <li class="list-group-item">Wage: {val.wage} </li>
    <li class="list-group-item"><button className="btn btn-success"> <Link to={`/edit/${val.uid}`} >edit</Link> </button> <button className="btn btn-danger" onClick={()=>deleteEmployees(val.uid)}>delete</button> </li>
  </ul>
                </div> </>
             );
    })}</div>
  

)
}
export default All
