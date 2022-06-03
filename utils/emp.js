const Employee = require("../models/empSchema");

// create new Employee
const addNewEmpReg = async (req, res) => {
  console.log("inside new emp reg", req.body);
  let totalEmp = 0;
  await Employee.find().then(function (emp) {
    totalEmp = emp.length;
  });
  console.log("9", totalEmp);
  try {
    let EmpDetails = req.body;
    const newEmp = new Employee({
      ...EmpDetails,

    });

    let savedEmp = await newEmp.save();

  
    return res.status(201).json({
      data: savedEmp,
      message: `Successfully save The Employee`,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unable to save the Employee`,
      success: false,
    });
  }
};
//ReadAll employee
const getAllEmp = async (req, res) => {
  Employee.find().then(function (emp) {
    res.send(emp);
     });
};
// Readone employee
const getEmpById = async (req, res) => {
  Employee.find({_id:req.params._id}).then(function (emp) {
    res.send(emp);
   
  });
};
// Edit and Update
const updateEmployee = async (req, res) => {
  console.log("inside update emp", req.body);
  try {
    
   
    const _id = req.params._id;
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const role = req.body.role;
    let emp = await Employee.find({ _id:req.params._id });
    console.log("Line 119 old user ", emp);
    if (!emp) {
      return res.status(201).json({
        message: `Employee not found.`,
        success: false,
      });
    }

    if(req.body.name){
      await Employee.updateOne({ _id }, { name }
      );
    }
    if(req.body.email){
      await Employee.updateOne({ _id }, { email }
      );
    }
    if(req.body.address){
      await Employee.updateOne({ _id }, { address }
      );
    }
    if(req.body.mobile){
      await Employee.updateOne({ _id }, { mobile }
      );
    }
    if(req.body.role){
      await Employee.updateOne({ _id }, { role }
      );
    }
    let newEmp = await Employee.find({ _id });

    console.log("Line 64 new emp ", JSON.stringify(newEmp));
    return res.status(200).json({
      data: newEmp,
      message: `Employee updated successfully`,
      success: true,
    });
  } catch (err) {
    console.log("ine 177 ", err.message);
    return res.status(201).json({
      message: `Unable to update`,
      success: false,
    });
  }
};
//delete employee
const deleteEmployee = async (req, res) => {
   
    Employee.remove({ _id: req.body.id }, function(err) {  
               if(err){  
                return res.status(201).json({
                  message: `Unable to delete`,
                  success: false, 
               }  );}
               else{    
                return res.status(200).json({
                 
                  message: `Employee Deleted successfully`,
                  success: true,             
                  }  )
                }
              })
    }   


   
       
     
   
module.exports = { addNewEmpReg, getAllEmp,getEmpById, updateEmployee,deleteEmployee };
