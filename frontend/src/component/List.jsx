import React, { useEffect, useState } from 'react'

const List = ({data,setData,getUsersData,handleDelete}) => {

   useEffect(()=>{
    getUsersData()

   },[])

  



    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data.users.map((user, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                            <td className="text-center py-1">{index + 1}</td>
                            <td className="text-center py-1">{user.uname}</td>
                            <td className="text-center py-1">{user.mobile}</td>
                            <td className="text-center py-1">{user.age}</td>
                            <td className="text-center py-1">{user.email}</td>
                            <td className='flex justify-center'>
                            <a className='text-blue-600 mr-3' >Edit</a>
                            <a className='text-red-500 cursor-pointer'  onClick={()=>handleDelete(user._id)}>Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
