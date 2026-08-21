interface Employee {
    name: string;
    id?: number ;
    department?: string;
    salary?: number
} 

const mark : Employee = {
    name : "Mark",
    id: 1101,
    department : "engineering",
    salary : 67000
}

const bill: Employee={
    name: "bill",
    id: 1102,
    department: "marketing",
    salary: 55000
}

const team: Employee[] = [mark, bill,{
    name: 'Alice',
    id: 103,
    department: 'HR',
    salary: 50000
}];

function printEmployeeDetails(employee: Employee): void {
    console.log(`Name: ${employee.name}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Salary: ${employee.salary}`);
}

printEmployeeDetails(mark);

// function displayEmployeeDetails({name, id, department}):

