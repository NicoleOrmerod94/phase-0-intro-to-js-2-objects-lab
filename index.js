// Define the 'employee' object
let employee = {
    // Properties of the employee object
    name: 'Sam',
  };
  
  // Define the 'updateEmployeeWithKeyAndValue' function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a clone of the 'employee' object to avoid modifying the original
    const updatedEmployee = { ...employee };
    
    // Update the clone with the new key-value pair
    updatedEmployee[key] = value;
    
    // Return the updated clone
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the 'employee' object destructively with the given key and value
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the 'employee' object without the specified key
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the 'employee' object destructively
    delete employee[key];
    return employee;
  }
  