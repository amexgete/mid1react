import axios from 'axios';

import React,{useEffect, useState} from 'react'
import './App.css';

function App() {
  const[data,setData]=useState([])
  const[name,setname]=useState()
  const[grade,setgrade]=useState()
  const postdata=()=>{
    axios.post('http://127.0.0.1:8000/student/post/',{
      name:name,
     grade:grade,
    }).then((response)=>
     setData(response.data)
    )
 
  }
 // const updatedata=(ID)=>{
    //axios.patch('http://127.0.0.1:8000/admin/student/studentclass/add/${ID}' ,{name:'new name'})
//.catch((err)=>alert(err))  }

 


 const fetchdata=()=>{
  
  axios.get('http://127.0.0.1:8000//student/list/').then((response)=>setData(response.data))
  
 }
 useEffect(()=>{
 fetchdata()


 },[])
 const handlechangeName=(e)=>{
  setname(e.target.value)
   
 }
 const handlechangegrade=(e)=>{
  setgrade(e.target.value)

 }
 

 return (
  <div className="App">
  {data.map((value)=>{
     return <div key={value.id}><h1>{value.name}</h1>
                <h1>{value.grade}</h1>
              
          </div>
   })}
   
    
    <form >
    <input type='text' value={name} onChange={handlechangeName}/>
    <input type='text' value={grade} onChange={handlechangegrade}/>
    <button onClick={postdata}>submit</button>
 
    
    </form>
    
 
     </div>
   );
  
  }

export default App;