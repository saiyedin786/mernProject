const user = require('../model/users.model.js')

const getUser = async(req,res)=>{
    try {
        const allUsers = await user.find()
        // console.log(allUsers)
        res.status(200).json({
            message:'users recieved successfully',
            users:allUsers
        })
        
    } catch (err) {
        res.status(500).json({
            message:'users not recieved successfully',
            error:err.message
        })
    }
}

const createUser = async(req,res)=>{
    
  try {
     const body = req.body
     console.log(body)
   if(!body.uname || !body.age || !body.email || !body.mobile){
    return res.status(400).json({message:'All field required',success:false})
   }

   const userAdd = await user.insertOne(body)

   console.log("useradded successfully",userAdd)
   return res.status(200).json({message:'user added successfully',success:true})
  } catch (error) {
    return res.status(500).json({message:error.message,success:false})
  }
}


const deleteUser = async(req,res)=>{
    
  try {
     const  id  = req.params.id
     

   const userDeleted = await user.findByIdAndDelete(id)

   console.log("user deleted successfully",userDeleted)
   return res.status(200).json({message:'user Deleted successfully',success:true})
  } catch (error) {
    return res.status(500).json({message:error.message,success:false})
  }
}

module.exports= {getUser,createUser,deleteUser}