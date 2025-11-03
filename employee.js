const fs = require("fs");


fs.readFile("employees.json", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    const employees = JSON.parse(data);

    const sortedEmployees = [employees].sort((a, b) => b.salary - a.salary);

    const experiencedEmployees = employees.filter(emp => emp.experience >= 3);

    const summaryList = experiencedEmployees.map(emp => ({
        name: emp.name,
        department: emp.department,
        bonus: emp.salary * 0.10 * emp.experience
    }));

    const totalSalary = experiencedEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log("Sorted Employees");
    console.log("Summary List");
    console.log(`Total Salary Expenditure: ₹${totalSalary}`);
});
