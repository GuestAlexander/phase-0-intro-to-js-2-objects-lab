// Write your solution in this file!
var employee = {
    name: "Bubba",
    address: "moo st",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const output = { ...employee }
    output[key] = value
    return output
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const output = { ...employee };
    delete output[key]
    return output
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}