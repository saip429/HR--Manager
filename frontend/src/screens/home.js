import Axios from "axios"
import { useState } from "react";


const Home= ()=>{

    const[uid, setUid]= useState('');
const[name, setName]= useState('');
const[age, setAge]= useState(18);
const[country, setCountry]= useState('');
const[position, setPosition]= useState('');
const[wage, setWage]= useState(0);

const addEmployee= ()=>{
Axios.post('/create',{
    uid: uid,
    name:name,
    age: age,
    wage: wage,
    position:position,
    country: country
}).then(Response=>{alert('Duplicate value detected please recheck UID \n status: 500')})
    
   
    
}



    return(
      <form>
       
            <div className=" mb-3  py-5 " id='main-cnt'>
            <label className="form-label mb-3" for="UID">UID </label>
                <input autoComplete="off" id= 'UID' name='UID' required='true' type= 'text' className=' form-control' placeholder='UID' 
                onChange={(event)=>{
                    setUid(event.target.value);
                }}
                
                ></input>
                <label className="form-label mb-3" for="name">Name </label>
                <input autoComplete="off" id= 'name' name='name' required='true' type= 'text' className=' form-control' placeholder='name'
                 onChange={(event)=>{
                    setName(event.target.value);
                }}
                ></input>
                <label className="form-label mb-3" for="age">age </label>
                <input autoComplete="off" id= 'age' name='age' type= 'number' required='true' className=' form-control' placeholder='age' min="18"
                 onChange={(event)=>{
                    setAge(event.target.value);
                }}
                ></input>
                <label className="form-label mb-3" for="country">country </label>
                <input autoComplete="off" id= 'country' required='true' name='country' type= 'text' className=' form-control' placeholder='country'
                 onChange={(event)=>{
                    setCountry(event.target.value);
                }}
                ></input>
                <label className="form-label mb-3" for="position">Postition </label>
                <input autoComplete="off" id= 'position' required='true' name='position' type= 'text' className=' form-control' placeholder='position'
                 onChange={(event)=>{
                    setPosition(event.target.value);
                }}
                ></input>
                <label className="form-label mb-3" for="wage">Wage </label>
                <input autoComplete="off" id= 'wage' required='true' name='wage' type= 'number' className=' form-control' placeholder='wage' min="0"
                 onChange={(event)=>{
                    setWage(event.target.value);;
                }}
                ></input>
                <button className="btn btn-primary mt-2 w-100" onClick={addEmployee}  >Add Employee</button>
                
                 </div>
                 </form>

       

    )
}
export default Home;