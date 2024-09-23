// Task 1: Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];


// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`employee: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}

displayEmployeeShifts(employees[0]);

// Task 3: Create a Function to Assing a New Shift
function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employees) {
        console.log(`Employee ${employeeName} not found.`);
        return;
    }

    const shiftExsts = employee.shifts.some(shift => shift.day === day);
    if (shiftExsts) {
        console.log(`Erroe: ${employeeName} already has a shift on ${day}.`);
    } else {
        employee.shifts.push({ day: day, hours: hours });
        console.log(`Shift added: ${employeeName} will work ${hours} hours on ${day}.`);
    }
}

assignShift('John', 'Friday', 8);