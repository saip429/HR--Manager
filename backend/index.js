const express= require('express')
const app= express()
const mysql= require('mysql')
const cors= require('cors')


app.use(cors())
app.use(express.json())
const db= mysql.createConnection({
    user:'admin',
    
    host:'',//aws ip ,
    password: '',//password ,
    database: 'employeesystem',
   
})

db.connect((err)=>{
    
    if(err) 
    console.log(err)
    else
    console.log('connected to db')
})




app.post('/create', (req,res)=>{
    let uid= req.body.uid;
    let Name= req.body.name;
   const UID=  uid.toUpperCase();
   const name= Name.toLowerCase();
   const age= req.body.age;
   const wage= req.body.wage;
   const position= req.body.position;
   const country= req.body.country;

   if(!UID || !name || !age || !wage || !position || !country){
    res.send({ msg: 'invalid code' });
   }
   else{
       
            db.query('insert into emplyoees (uid, name,age,country,wage,position) values (?,?,?,?,?,?)', [UID, name,age,country,wage,position],
            (err,result)=>{
                if(err)
                res.send({msg: 'UID is already exists, please re-enter  UID'})
                else
                {
            db.query('commit')
            res.send({msg: 'values inserted'})}
            })
            
           }
           
       })

app.get('/allemployees',(req,res)=>{
 db.query('select * from employees',(err,result)=>{
    if(err)
    console.log(err)
    else{
        res.send(result)
    }



 })
})

app.put('/update',(req,res)=>{
    const uid= req.body.uid;
    const name= req.body.name;
    const age= req.body.age;
    const wage= req.body.wage;
    const position= req.body.position;
    const country= req.body.country;
    
    db.query(`update employees set name= ?, age=?, country=?, wage=?, position=? where uid = '${uid}' `,[name,age,country,wage,position],(err,result)=>{
        if(err)
        res.send({msg: 'database error'})
        else
        res.send({msg: 'values updated!'})
    })
    db.query('commit')
})

app.get('/info/:id', (req,res)=>{
    const id= req.params.id;
    db.query('select * from employees where(uid= ?)',[id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id= req.params.id;
    db.query('delete from employees where uid= ?',[id],(err)=>{
        if(err){
           console.log(err)
        }
        else{
           
            console.log('deleted')
        }
    })
})



app.use('/', (err,req,res,next)=>{
console.log(err)
})

app.listen(5000, ()=>{
    console.log('serving on port 5000')

})
