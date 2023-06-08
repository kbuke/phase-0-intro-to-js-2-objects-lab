//Assign an employee variable to an Object containing name and streetAddress keys
const employee = {
    firstName: `Kaan`,
    streetAddress: `91 Hatherop Rd`
}
//Create new function updateEmployeeWithKeyAndValue()
//Takes three arguments: an employee Object, a key and a value. 
//Should return a new Object that has an updated value for the key passed in.
//Should NOT mutate the employee therefore use the SPREAD operator!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}; //spread operator
    newEmployee[key] = value;//tell JS to interpret value inside []
    return newEmployee
}
//Create new function destructivelyUpdateEmployeeWithKeyAndValue()
//Should work the same as updateEmployeeWithKeyAndValue() but it mutates the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//Create function deleteFromEmployeeByKey() 
//Should take in a employee Object and a key. 
//Should delete the property with that key from the employee Object. 
//Should not mutate the original employee Object use SPREAD operator!
function deleteFromEmployeeByKey(employee, key, value) {
    const delEmployee = {...employee};
    delEmployee[key] = value
    delete delEmployee.key
    return delEmployee
}
//Create function destructivelyDeleteFromEmployeeByKey(): 
//Should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    delete employee.key
    return employee
}