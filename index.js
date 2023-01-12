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

function detructivelyUpdateEmployeeWithKeyAndValue() {
    const employee = { ...employee };

}


