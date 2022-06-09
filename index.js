// Write your solution in this file!
let employee = {
    name: "Judy mwai",
    streetAddress: "Nairobi, kenya"
  }
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee, name: "Sam", streetAddress: "11 Broadway"}
    return newEmployee
  }
  console.log(employee)
  console.log(updateEmployeeWithKeyAndValue())
  
  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
  }
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"))
  console.log(employee)
  
  function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee
  }
  console.log(deleteFromEmployeeByKey())
  console.log(employee)
  
  function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee
  }
  console.log(destructivelyDeleteFromEmployeeByKey())
  console.log(employee)
