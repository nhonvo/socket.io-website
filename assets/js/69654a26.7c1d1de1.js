"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[1498],{5680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>y});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=l,y=g["".concat(o,".").concat(m)]||g[m]||u[m]||r;return n?t.createElement(y,i(i({ref:a},d),{},{components:n})):t.createElement(y,i({ref:a},d))}));function y(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[g]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4648:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=n(8168),l=(n(6540),n(5680));const r={layout:"post",title:"SQL FOR EVERYONE - THE DEFINITIVE GUIDE",subtitle:"SQL Essentials Part 4",date:new Date("2024-01-21T12:00:00.000Z"),author:"Truong Nhon",hidden:!1,published:!0,multilingual:!1,catalog:!0,lang:"en",tags:["sql","sqlserver"]},i=void 0,s={permalink:"/2024/1/21/SQL-cheatsheet",editUrl:"https://github.com/nhonvo/nhonvo.github.io/edit/main/blog/blog/2024-1-21-SQL-cheatsheet.md",source:"@site/blog/2024-1-21-SQL-cheatsheet.md",title:"SQL FOR EVERYONE - THE DEFINITIVE GUIDE",description:"Introduction to SQL",date:"2024-01-21T12:00:00.000Z",formattedDate:"January 21, 2024",tags:[{label:"sql",permalink:"/tags/sql"},{label:"sqlserver",permalink:"/tags/sqlserver"}],readingTime:9.37,hasTruncateMarker:!1,authors:[{name:"Truong Nhon"}],frontMatter:{layout:"post",title:"SQL FOR EVERYONE - THE DEFINITIVE GUIDE",subtitle:"SQL Essentials Part 4",date:"2024-01-21T12:00:00.000Z",author:"Truong Nhon",hidden:!1,published:!0,multilingual:!1,catalog:!0,lang:"en",tags:["sql","sqlserver"]},prevItem:{title:"Design-database",permalink:"/2024/2/6/Design-database"},nextItem:{title:"Exploring Dynamic Distance Calculation with Delegates: A Proof of Concept",permalink:"/2024/1/18/Delegate"}},o={authorsImageUrls:[void 0]},p=[{value:"Introduction to SQL",id:"introduction-to-sql",level:2},{value:"1.1 RDBMS and Tables",id:"11-rdbms-and-tables",level:3},{value:"2. Basic SQL Syntax",id:"2-basic-sql-syntax",level:2},{value:"2.1 SELECT and FROM",id:"21-select-and-from",level:3},{value:"2.2 WHERE",id:"22-where",level:3},{value:"2.3 GROUP BY and HAVING",id:"23-group-by-and-having",level:3},{value:"2.4 ORDER BY",id:"24-order-by",level:3},{value:"3. Querying Data",id:"3-querying-data",level:2},{value:"4. Filtering and Sorting Data",id:"4-filtering-and-sorting-data",level:2},{value:"4.1 BETWEEN",id:"41-between",level:3},{value:"4.2 LIKE and ILIKE",id:"42-like-and-ilike",level:3},{value:"4.3 IN",id:"43-in",level:3},{value:"5. Joining Tables",id:"5-joining-tables",level:2},{value:"5.1 INNER JOIN",id:"51-inner-join",level:3},{value:"5.2 LEFT (OUTER) JOIN",id:"52-left-outer-join",level:3},{value:"5.3 RIGHT (OUTER) JOIN",id:"53-right-outer-join",level:3},{value:"5.4 FULL (OUTER) JOIN",id:"54-full-outer-join",level:3},{value:"6. Aggregation Functions",id:"6-aggregation-functions",level:2},{value:"7. Subqueries and Nested Queries",id:"7-subqueries-and-nested-queries",level:2},{value:"8. Modifying Database Information",id:"8-modifying-database-information",level:2},{value:"8.1 INSERT",id:"81-insert",level:3},{value:"8.2 UPDATE",id:"82-update",level:3},{value:"8.3 DELETE",id:"83-delete",level:3},{value:"9. Advanced SQL Techniques",id:"9-advanced-sql-techniques",level:2},{value:"9.1 Handling NULL values",id:"91-handling-null-values",level:3},{value:"9.2 String Functions",id:"92-string-functions",level:3},{value:"9.3 Date and Time Functions",id:"93-date-and-time-functions",level:3},{value:"9.4 Case Statements",id:"94-case-statements",level:3},{value:"9.5 Window Functions",id:"95-window-functions",level:3},{value:"Optimization and Performance Tuning",id:"optimization-and-performance-tuning",level:2},{value:"10.1 EXPLAIN",id:"101-explain",level:3},{value:"10.2 Avoid SELECT",id:"102-avoid-select",level:3},{value:"10.3 Use LIMIT",id:"103-use-limit",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:p},g="wrapper";function u(e){let{components:a,...n}=e;return(0,l.yg)(g,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"introduction-to-sql"},"Introduction to SQL"),(0,l.yg)("p",null,"SQL is a standard language designed for managing data in relational databases. It's commonly used to query, insert, update, and modify data. Most RDBMS (Relational Database Management System) like MySQL, SQLite, Oracle, and PostgreSQL use SQL."),(0,l.yg)("p",null,"As a data analyst, you'll often work with large volumes of data stored in these databases. SQL becomes an essential tool to retrieve, manipulate, and analyze this data."),(0,l.yg)("h3",{id:"11-rdbms-and-tables"},"1.1 RDBMS and Tables"),(0,l.yg)("p",null,"In SQL, data is stored in tables, just like an Excel spreadsheet. A table is made up of rows (records) and columns (fields). Here's an example of a table, Employees:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"EmployeeID"),(0,l.yg)("th",{parentName:"tr",align:null},"FirstName"),(0,l.yg)("th",{parentName:"tr",align:null},"LastName"),(0,l.yg)("th",{parentName:"tr",align:null},"Position"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"John"),(0,l.yg)("td",{parentName:"tr",align:null},"Doe"),(0,l.yg)("td",{parentName:"tr",align:null},"Analyst")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"Jane"),(0,l.yg)("td",{parentName:"tr",align:null},"Doe"),(0,l.yg)("td",{parentName:"tr",align:null},"Engineer")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"Mary"),(0,l.yg)("td",{parentName:"tr",align:null},"Johnson"),(0,l.yg)("td",{parentName:"tr",align:null},"Manager")))),(0,l.yg)("h2",{id:"2-basic-sql-syntax"},"2. Basic SQL Syntax"),(0,l.yg)("p",null,"Let's look at the fundamental SQL commands: ",(0,l.yg)("inlineCode",{parentName:"p"},"SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY.")),(0,l.yg)("h3",{id:"21-select-and-from"},"2.1 SELECT and FROM"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"SELECT")," statement is used to select data from a database, and the ",(0,l.yg)("inlineCode",{parentName:"p"},"FROM"),"statement specifies which table to get the data from."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT FirstName, LastName \nFROM Employees; \n")),(0,l.yg)("p",null,"This query retrieves all first and last names from the Employees table. If you want to select all columns, use the * symbol:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Employees; \n")),(0,l.yg)("h3",{id:"22-where"},"2.2 WHERE"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," clause is used to filter records:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nWHERE Position = 'Analyst'; \n")),(0,l.yg)("p",null,"This query retrieves all data for employees who are analysts."),(0,l.yg)("h3",{id:"23-group-by-and-having"},"2.3 GROUP BY and HAVING"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"GROUP BY")," groups rows that have the same values in specified columns into aggregated data. ",(0,l.yg)("inlineCode",{parentName:"p"},"HAVING")," is used instead of WHERE with aggregated data."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Position, COUNT(*) \nFROM Employees \nGROUP BY Position \nHAVING COUNT(*) > 1; \n")),(0,l.yg)("p",null,"This query shows positions held by more than one employee."),(0,l.yg)("h3",{id:"24-order-by"},"2.4 ORDER BY"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ORDER BY")," is used to sort the data in ascending or descending order:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nORDER BY LastName ASC; \n")),(0,l.yg)("p",null,"This query sorts employees by their last name in ascending order."),(0,l.yg)("h2",{id:"3-querying-data"},"3. Querying Data"),(0,l.yg)("p",null,"The SELECT statement is not just for selecting simple rows. We can use it to perform calculations, concatenations, and more."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT FirstName || ' ' || LastName as FullName, Position\nFROM Employees;\nThis query concatenates the first and last names, separated by a space, and displays it as FullName.\n")),(0,l.yg)("h2",{id:"4-filtering-and-sorting-data"},"4. Filtering and Sorting Data"),(0,l.yg)("p",null,"Apart from ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"ORDER BY"),", SQL offers ",(0,l.yg)("inlineCode",{parentName:"p"},"BETWEEN"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"LIKE"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"IN "),"to filter data."),(0,l.yg)("h3",{id:"41-between"},"4.1 BETWEEN"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"BETWEEN")," is used to filter by a range:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Orders \nWHERE OrderDate BETWEEN '2023-01-01' AND '2023-12-31'; \n")),(0,l.yg)("p",null,"This query selects all orders placed in the year 2023."),(0,l.yg)("h3",{id:"42-like-and-ilike"},"4.2 LIKE and ILIKE"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"LIKE")," is used in a ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE"),' clause to search for a specified pattern in a column. The "%" sign is used to define wildcards (missing letters) both before and after the pattern. Also, note that ',(0,l.yg)("inlineCode",{parentName:"p"},"LIKE")," is case sensitive. ",(0,l.yg)("inlineCode",{parentName:"p"},"ILIKE")," can be used for case-insensitive search."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nWHERE FirstName LIKE 'J%'; \n")),(0,l.yg)("p",null,"This query selects all employees with a first name starting with 'J'."),(0,l.yg)("h3",{id:"43-in"},"4.3 IN"),(0,l.yg)("p",null,"IN allows you to specify multiple values in a ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," clause:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nWHERE Position IN ('Analyst', 'Engineer'); \n")),(0,l.yg)("p",null,"This query selects all analysts and engineers."),(0,l.yg)("h2",{id:"5-joining-tables"},"5. Joining Tables"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"JOIN")," statements are used to combine rows from two or more tables based on a related column. The different types of joins include ",(0,l.yg)("inlineCode",{parentName:"p"},"INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, and FULL (OUTER) JOIN"),".\nConsider this additional table, Departments:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"DepartmentID"),(0,l.yg)("th",{parentName:"tr",align:null},"DepartmentName"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"IT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"Sales")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"HR")))),(0,l.yg)("p",null,"And suppose we add a DepartmentID field to the Employees table. Here's how we can use different types of joins:"),(0,l.yg)("h3",{id:"51-inner-join"},"5.1 INNER JOIN"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Employees.LastName, Employees.FirstName, Departments.DepartmentName \nFROM Employees\nINNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID; \n")),(0,l.yg)("p",null,"This query retrieves the list of employees along with their respective department names."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"JOIN More Than 2 Tables")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"-- Example of INNER JOIN with 3 tables\nSELECT c.CustomerID, c.FullName, o.FoodName, d.FullAddress\nFROM Customer c\nINNER JOIN CustomerOrder o ON c.CustomerID = o.CustomerID\nINNER JOIN DeliveryAddress d ON d.ID = o.DeliveryAddressID;\n")),(0,l.yg)("p",null,"Extending the concept of INNER JOIN to involve three tables for a more comprehensive result set."),(0,l.yg)("h3",{id:"52-left-outer-join"},"5.2 LEFT (OUTER) JOIN"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Employees.LastName, Employees.FirstName, Departments.DepartmentName FROM Employees\nLEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID; \n")),(0,l.yg)("p",null,"This query retrieves all employees and their departments, including employees with no department (the DepartmentName for them will be NULL)."),(0,l.yg)("h3",{id:"53-right-outer-join"},"5.3 RIGHT (OUTER) JOIN"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Employees.LastName, Employees.FirstName, Departments.DepartmentName FROM Employees\nRIGHT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID; \n")),(0,l.yg)("p",null,"This query retrieves all departments and their employees, including departments with no employees."),(0,l.yg)("h3",{id:"54-full-outer-join"},"5.4 FULL (OUTER) JOIN"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Employees.LastName, Employees.FirstName, Departments.DepartmentName FROM Employees\nFULL JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID; \n")),(0,l.yg)("p",null,"This query retrieves all combinations of employees and departments, including employees with no department and departments with no employees."),(0,l.yg)("h2",{id:"6-aggregation-functions"},"6. Aggregation Functions"),(0,l.yg)("p",null,"SQL provides several functions to perform calculations on data, such as ",(0,l.yg)("inlineCode",{parentName:"p"},"COUNT(), SUM(), AVG(), MIN(), MAX(), and GROUP_CONCAT().")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) \nFROM Orders \nWHERE OrderDate BETWEEN '2023-01-01' AND '2023-12-31'; \n")),(0,l.yg)("p",null,"This query returns the total number of orders placed in the year 2023."),(0,l.yg)("h2",{id:"7-subqueries-and-nested-queries"},"7. Subqueries and Nested Queries"),(0,l.yg)("p",null,"A subquery is a SQL query nested inside a larger query. A subquery may occur in:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A SELECT clause"),(0,l.yg)("li",{parentName:"ul"},"A FROM clause"),(0,l.yg)("li",{parentName:"ul"},"A WHERE clause\nThe subquery can be nested inside a ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT, INSERT, UPDATE, or DELETE")," statement or inside another subquery.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT EmployeeID, FirstName, Position \nFROM Employees \nWHERE EmployeeID IN (SELECT EmployeeID FROM Orders WHERE OrderTotal > 1000); \n")),(0,l.yg)("p",null,"This query selects all employees who have made orders totaling more than 1000."),(0,l.yg)("h2",{id:"8-modifying-database-information"},"8. Modifying Database Information"),(0,l.yg)("p",null,"SQL allows you to insert, update, and delete data with INSERT, UPDATE, and DELETE commands respectively. Be careful when using these commands as you can change your data permanently."),(0,l.yg)("h3",{id:"81-insert"},"8.1 INSERT"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Employees (EmployeeID, FirstName, LastName, Position) VALUES (4, 'Mark', 'Anderson', 'Analyst'); \n")),(0,l.yg)("p",null,"This query adds a new row to the Employees table."),(0,l.yg)("h3",{id:"82-update"},"8.2 UPDATE"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE Employees \nSET Position = 'Senior Analyst' \nWHERE EmployeeID = 4; \n")),(0,l.yg)("p",null,"This query changes Mark Anderson's position to Senior Analyst."),(0,l.yg)("h3",{id:"83-delete"},"8.3 DELETE"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Employees WHERE EmployeeID = 4; \n")),(0,l.yg)("p",null,"This query deletes Mark Anderson's record from the Employees table."),(0,l.yg)("h2",{id:"9-advanced-sql-techniques"},"9. Advanced SQL Techniques"),(0,l.yg)("p",null,"Let's delve into more complex techniques with the help of examples."),(0,l.yg)("h3",{id:"91-handling-null-values"},"9.1 Handling NULL values"),(0,l.yg)("p",null,"NULL value in SQL means no or zero value. Here's how you can use ",(0,l.yg)("inlineCode",{parentName:"p"},"IS NULL")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"IS NOT NULL"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nWHERE DepartmentID IS NULL; \n")),(0,l.yg)("p",null,"This query selects all employees who don't belong to any department."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM Employees \nWHERE DepartmentID IS NOT NULL; \n")),(0,l.yg)("p",null,"This query selects all employees who belong to a department."),(0,l.yg)("h3",{id:"92-string-functions"},"9.2 String Functions"),(0,l.yg)("p",null,"SQL offers several functions to manipulate strings. Some examples include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CONCAT()"),": Concatenates two or more strings."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TRIM()"),": Removes leading and trailing spaces of a string. "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"LENGTH()"),": Returns the length of a string.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(FirstName, ' ', LastName) as FullName, TRIM(Position), LENGTH(FirstName) as NameLength \nFROM Employees;\n")),(0,l.yg)("p",null,"This query retrieves a full name by combining first and last names, the position after removing leading and trailing spaces, and the length of the first name."),(0,l.yg)("h3",{id:"93-date-and-time-functions"},"9.3 Date and Time Functions"),(0,l.yg)("p",null,"SQL provides many functions to work with date and time. Some examples include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NOW()"),": Returns the current date and time."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CURDATE()"),": Returns the current date."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CURTIME()"),": Returns the current time.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT OrderID, OrderTotal, NOW() as QueryTime \nFROM Orders \nWHERE OrderDate = CURDATE(); \n")),(0,l.yg)("p",null,"This query retrieves today's orders along with the query execution time."),(0,l.yg)("h3",{id:"94-case-statements"},"9.4 Case Statements"),(0,l.yg)("p",null,"Case statements help in implementing conditional logic in SQL:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT FirstName, Position, \nCASE \nWHEN Position = 'Analyst' THEN 'Junior Level' \nWHEN Position = 'Engineer' THEN 'Mid Level' \nELSE 'Senior Level' \nEND as JobLevel \nFROM Employees; \n")),(0,l.yg)("p",null,"This query categorizes employees into job levels based on their positions."),(0,l.yg)("h3",{id:"95-window-functions"},"9.5 Window Functions"),(0,l.yg)("p",null,"Window functions perform calculations across a set of table rows that are related to the current row:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT FirstName, Position, Salary, \nRANK() OVER (PARTITION BY Position ORDER BY Salary DESC) as Rank FROM Employees;\n")),(0,l.yg)("p",null,"This query ranks employees within their respective positions based on their salaries."),(0,l.yg)("h2",{id:"optimization-and-performance-tuning"},"Optimization and Performance Tuning"),(0,l.yg)("p",null,"Here are some examples demonstrating SQL optimization techniques:"),(0,l.yg)("h3",{id:"101-explain"},"10.1 EXPLAIN"),(0,l.yg)("p",null,"Most SQL databases support the EXPLAIN command, which shows the execution plan of an SQL statement. This can help you understand how your SQL query will be executed and where you can optimize it."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT * FROM Employees; \n")),(0,l.yg)("h3",{id:"102-avoid-select"},"10.2 Avoid SELECT"),(0,l.yg)("p",null,"Rather than using SELECT *, specify the columns you need. This reduces the amount of data that needs to be read from the disk."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT FirstName, LastName FROM Employees; \n")),(0,l.yg)("h3",{id:"103-use-limit"},"10.3 Use LIMIT"),(0,l.yg)("p",null,"If you only need a specific number of rows, use LIMIT to prevent reading unnecessary data."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Employees ORDER BY Salary DESC LIMIT 10; \n")),(0,l.yg)("p",null,"This query gets the top 10 employees with the highest salaries. 10.4 Index your data\nIndexing your data can significantly speed up data retrieval times. Here's how you can add an index:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX idx_employees_position ON Employees(Position); \n")),(0,l.yg)("h2",{id:"whats-next"},"What's Next?"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Practice, practice, practice"),": The best way to reinforce your SQL skills is by practicing. Websites like LeetCode, HackerRank, and SQLZoo provide hundreds of SQL problems that you can practice with."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Learn Database Design"),": Understanding how databases are structured and designed will help you write better and more efficient SQL queries. Look into topics such as normalization, entity-relationship models, and data integrity."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Explore Advanced SQL Topics"),": This tutorial covered the basics, but there's still a lot to learn. Delve into more advanced topics like stored procedures, triggers, views, and transaction control."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Learn About Database Administration"),": Although not typically part of a Data Analyst's role, understanding how a database is administered can provide useful context. This can also open up new opportunities in the realm of database management."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Understand SQL in the context of a programming language"),": If you are familiar with a programming language like Python or R, try to use SQL commands within these languages. This often gives you more flexibility and allows you to perform more complex operations with your data."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Learn About Different SQL Databases"),": There are many different SQL databases, such as MySQL, SQLite, PostgreSQL, and Oracle. Each has its own unique features and syntax nuances. Familiarize yourself with the one that's most relevant to your work or interests."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Apply SQL in Your Projects"),": The ultimate test of your skills will be applying SQL in your projects. Whether it's for cleaning data, data wrangling, or analysis, the practical application of SQL will solidify your learning and give you valuable experience.\nRemember, becoming proficient in SQL is a journey, not a destination. Enjoy the process of learning and experimenting. Happy querying!")))}u.isMDXComponent=!0}}]);