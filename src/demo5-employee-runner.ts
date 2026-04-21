import {Employee} from "./demo4-employee.js"

Employee.printCompanyName()

let emp = new Employee(1,"Vijay",2500,"High")
emp.printEmployeeDetails()

Employee.assignCompanyName("Google")
Employee.printCompanyName()