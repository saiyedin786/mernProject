import React, { useState } from 'react'

const InputForm = ({getUsersData,uname,setUname,age,setAge,email,setEmail,mobile,setMobile,handleReset}) => {
 

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            uname:uname,
            age:age,
            mobile:mobile,
            email:email
        }
        console.log(formData)
  
    try {
      const response = await fetch('http://localhost:5000/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      if(data.success){
        handleReset()
        alert('user Added successfully')
        getUsersData()
      }
      // Handle successful submission (e.g., clear form, show success message)
    } 
    
    catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
    <div className='w-full h-12 flex justify-between items-center bg-gray-100 px-10 mt-5 mb-5  '>
       
         <div className=' flex justify-between items-center gap-1 px-3 '>
            <label htmlFor="">Name</label>
            <input value={uname} onChange={(e)=>setUname(e.target.value)} type="text" name="uname" id="uname" className=' border-b-1 outline-0'/>
        </div>
        <div className=' flex justify-between items-center gap-3 px-3'>
            <label htmlFor="">Age</label>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" name="age" id="age" className=' border-b-1 outline-0'/>
        </div>
         <div className=' flex justify-between items-center gap-3 px-3'>
            <label htmlFor="">Mobile</label>
            <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" name='mobile' id='mobile' className=' border-b-1 outline-0'/>
        </div>
         <div className=' flex justify-between items-center gap-3 px-3'>
            <label htmlFor="">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name='email' id="email" className=' border-b-1 outline-0'/>
        </div>
        <div>
            <button className='px-5 mr-5 py-1 text-red-500 bg-green-500 rounded-md' type='submit' >Add Record</button>
            <button className='px-10 py-1 bg-black text-white rounded-md' type='reset' onClick={handleReset}>Reset</button>
        </div>

       
    </div>
    </form>
  )
}

export default InputForm