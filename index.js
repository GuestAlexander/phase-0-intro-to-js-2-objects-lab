const employee = {
    name: "Steve",
    streetAddress: "321 Blastoff"
}

function updateEmployeeWithKeyAndValue() {
    const newEmployee = { ...employee };
    newEmployee.name = 'Sam'
    newEmployee.streetAddress = '11 Broadway'
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log(employee)
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}



