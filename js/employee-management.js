*eslint-env browser*

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var application = function () {
    "use strict";
    
    // DATABASE: Set 5 employees information
    var i, employees, employee1, employee2, employee3, employee4, employee5, myBtn, table, newEmployee;
    
    employees = [];
    
    employee1 = [];
    employee1["name"] = "Juan Perez";
    employee1["title"] = "Designerr";
    employee1["extention"] = parseInt(3423, 10);
    
    employee2 = [];
    employee2["name"] = "John Smith";
    employee2["title"] = "Sales";
    employee2["extention"] = parseInt(6661, 10);
    
    employee3 = [];
    employee3["name"] = "Sally Smith";
    employee3["title"] = "Seller";
    employee3["extention"] = parseInt(9876, 10);
    
    employee4 = [];
    employee4["name"] = "John";
    employee4["title"] = "Designer";
    employee4["extention"] = parseInt(4557, 10);
    
    employee5 = [];
    employee5["name"] = "Cora Perez";
    employee5["title"] = "Seller";
    employee5["extention"] = parseInt(1212, 10);
    
    employees.push(employee1, employee2, employee3, employee4, employee5);
    

    table = "<tr><td>Name</td><td>Title</td><td>Extention</td><td></td></tr>";
    
    myBtn = "<button class='btnDelete' onclick='deleteEntry(this)' value='delete'>Delete</button>";

    
    for (i = 0; i < employees.length; i += 1) {
        table += "<tr><td>" + String(employees[i]["name"]) + "</td><td>" + String(employees[i]["title"]) + "</td><td>" + String(employees[i]["extention"]) + "</td><td>" + myBtn + "</td><tr>";
    }


    $("employeesTable").innerHTML = table;

    var addEntry = function () {
        var name, title, extention, required;
        
        required = "* Required field";
        name = $("name").value;
        title = $("title").value;
        extention = $("extention").value;
        newEmployee = [];

        if (name === "") {
            $("nameREQ").innerHTML = required;
        } else {
            newEmployee["name"] = name;
        }
        if (title === "") {
            $("titleREQ").innerHTML = required;
        } else {
            newEmployee["title"] = title;
        }
        if (extention === "") {
            $("extentionREQ").innerHTML = required;
        } else {
            newEmployee["extention"] = extention;
        }
y
        employees.push(newEmployee);
        

        table += "<tr><td>" + String(newEmployee["name"]) + "</td><td>" + String(newEmployee["title"]) + "</td><td>" + String(newEmployee["extention"]) + "</td><td>" + myBtn + "</td><tr>";
        
        $("employeesTable").innerHTML = table;

        $("employeeForm").reset();
        
    };
    

    $("btnRegister").addEventListener("click", addEntry);
    

    var deleteEntry = function (a) {
        var x = a.parentNode.parentNode.rowIndex;
        $("employeesTable").deleteRow(x);
    };
};

window.addEventListener("load", application);
