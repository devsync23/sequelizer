import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import employeeController from './controllers/employeeController';
import departmentController from './controllers/departmentController';
import projectController from './controllers/projectController';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

import EmployeeModel from './models/Employee';
import DepartmentModel from './models/Department';
import ProjectModel from './models/Project';

const Employee = EmployeeModel(sequelize);
const Department = DepartmentModel(sequelize);
const Project = ProjectModel(sequelize);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define routes
app.get('/employees', employeeController.getEmployees);
// Implement other employee routes

app.get('/departments', departmentController.getDepartments);
// Implement other department routes

app.get('/projects', projectController.getProjects);
// Implement other project routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});