// Write your solution in this file!
const employee={
    name:"joanne",
    streetAdress:"01 thika"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee= {...employee};
    newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee= {...employee};
    delete newEmployee[key]
    return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(employee,object){
    delete employee[object]
    return employee
}