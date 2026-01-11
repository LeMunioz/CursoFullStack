const employees = [
      { id: 1, name: 'CArlitos', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Benito CAmelo', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Clauida', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'Angel Eduardo', age: 23, department: 'IT', salary: 50000},
      { id: 5, name: 'Javier Garnica', age: 21,department: 'IT', salary: 50000},
      { id: 6, name: 'Fany Muñoz', age: 20, department: 'Sales', salary: 40000},
      { id: 7, name: 'Kevin Mohammed', age: 20,department: 'CEO', salary: 90000}
    ];

// Funcion para poner datos de todos los empleados
function MuestraEmpleado() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//Para ir calculando la suma de todos los salarios en la variable acc
function CalculaSalarios() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

//Para poner los empleados que estan en HR
function PonerEmpleadosHR() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//PAra poner un empleado por id
function EncuentraEmpleadoID(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }