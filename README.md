Student Management System
Overview
This full-stack Student Management System application is designed to perform CRUD operations. The backend is built with Spring Boot, exposing RESTful APIs, and uses PostgreSQL for data storage. The frontend, developed with React, consumes these APIs using Axios, and incorporates Bootstrap for styling. This separation ensures a loosely coupled architecture, enhancing maintainability and scalability.
Technologies Used:
Backend: Spring Boot, spring REST, Spring DataJPA, Frontend: React,java Script(ES6), Database: PostgreSQL, HTTP Client: Axios, Styling: Bootstrap
Architecture and Features
Backend
Built with Spring Boot, the backend handles CRUD operations through RESTful APIs. It includes a service layer for business logic, a repository layer for database interactions using Spring Data JPA, and exception handling. The backend ensures data integrity with server-side validation and centralized error handling.
Frontend
The React frontend provides a dynamic UI with reusable components for managing student data. Used various React hooks, such as useState, useEffect, and useNavigate, usseParams are used to manage state and side effects efficiently. React Router handles navigation, while Axios facilitates API calls to the backend. Bootstrap ensures a responsive design. Key features include views for listing, adding, editing and deleting students.
for Backend setup : configure the db for postgres as shown below.
![image](https://github.com/user-attachments/assets/4196baea-b15b-4b71-b984-d327761ceb14)
for Frontend setup: few main steps  as follows
npm create vite@latest smsFrontend
cd smsFrontend
npm install
npm run dev
install ES7+ React/Redux... snippet extension --> this provides us with commonly used snippets.
npm install bootstrap --save ( bootstrap for styling ,this is a css framework )
npm install axios --save (axios library for making rest api calls to backend restful webservices)
npm i react-icons
npm install react-route-dom --save(we configured all the routing ins APP.JSX)


