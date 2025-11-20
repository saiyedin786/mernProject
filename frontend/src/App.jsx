import React, { useState,useEffect } from "react";
import Navbar from "./component/Navbar";
import InputForm from "./component/InputForm";
import List from "./component/List";
const App = ()=>{

   const [data, setData] = useState({ users: [] });

      const [uname,setUname] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")

    const handleReset = ()=>{
        setUname("")
        setAge("")
        setEmail("")
        setMobile("")
    }


    const getUsersData = ()=>
    {
      
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(res => setData(res))
            .catch(error => console.error('Error fetching data:', error));

    }

  const handleDelete = async(id)=>{
  
      try {
      const res = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);

    if(data.success){
      alert('user deleted successfully')
      
      getUsersData()

    }

  } catch (err) {
    console.error("Error deleting item:", err);
  }

    
   }


  return(
    <>
    
    
    <Navbar/>
    <InputForm getUsersData={getUsersData} uname={uname} email={email} age={age} mobile={mobile} setUname={setUname} setEmail={setEmail} setAge={setAge} setMobile={setMobile} handleReset={handleReset}/>
    <List data={data} setData={setData} getUsersData={getUsersData} handleDelete={handleDelete} />
    </>
  )
}

export default App