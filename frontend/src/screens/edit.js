import axios from "axios";
import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import './edit.css'
function Edit(){
    const {id}= useParams(); 
   
    const[employeeList, setEmployeeList]= useState([])
    axios.get(`/info/${id}`).then((res)=>{
        setEmployeeList(res.data)
    })
    
    const[uid, setUid]= useState('');
const[name, setName]= useState('');
const[age, setAge]= useState(18);
const[country, setCountry]= useState('');
const[position, setPosition]= useState('');
const[wage, setWage]= useState(0);

function submitChanges(){
    if(window.confirm('are you sure?')){
    axios.put('/update',{
        uid: uid,
    name:name,
    age: age,
    wage: wage,
    position:position,
    country: country
    }).then(alert('values updated!'))}

}


return(
    
    <div>
        {employeeList.map((val)=>{
            return(
                <div className="card" id="card--edit">
                     <ul class="list-group list-group-flush">
                     <li class="list-group-item">
                         <label for='uid--in'>UID: </label>
                         <input id='uid--in' className="form-control " autoComplete="off" required='true' placeholder={val.uid} onChange={(event)=>{setUid(event.target.value)}} ></input>
                         
                          </li>
                          <li class="list-group-item">
                         <label for='name--in'>Name: </label>
                         <input id='name--in' className="form-control" autoComplete="off" required='true' placeholder={val.name}  onChange={(event)=>{setName(event.target.value)}}></input>
                         
                          </li>
                          <li class="list-group-item">
                         <label for='age--in'>age: </label>
                         <input id='age--in' className="form-control" autoComplete="off" required='true' placeholder={val.age}  onChange={(event)=>{setAge(event.target.value)}}></input>
                         
                          </li>
                          <li class="list-group-item">
                         <label for='wage--in'>wage: </label>
                         <input id='wage--in' className="form-control" autoComplete="off" required='true' placeholder={val.wage}  onChange={(event)=>{setWage(event.target.value)}}></input>
                         
                          </li>
                          <li class="list-group-item">
                         <label for='country--in'>country: </label>
                         <input id='country--in' className="form-control" autoComplete="off" required='true' placeholder={val.country}  onChange={(event)=>{setCountry(event.target.value)}}></input>
                         
                          </li>
                          <li class="list-group-item">
                         <label for='position--in'>position: </label>
                         <input id='position--in' className="form-control" autoComplete="off" required='true' placeholder={val.position}  onChange={(event)=>{setPosition(event.target.value)}}></input>
                         
                          </li>
                          
                     </ul>
                     <button className="btn btn-success" id='submit--edit' onClick={submitChanges}>submit changes</button>

                </div>
            )

        })}
    </div>
    
)

}

export default Edit