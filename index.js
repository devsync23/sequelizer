import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  fireEmployee
} from './controllers/employee.controller.js'

const username = "root"
const password = "root"

const sequelize = new Sequelize('database', username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

/**
 * Employee Routes
 */
app.route('/employees')
  .get(getEmployees)
  .post(createEmployee);

app.route('/employees/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(fireEmployee);

// /**
//  * Department Routes
//  */
// app.route('/departments')
//   .get(getEmployee)
//   .put(updateEmployee);

// /**
//  * Project Routes
//  */
// app.route('/projects')
//   .get(getProjects)
//   .put(updateEmployee);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});