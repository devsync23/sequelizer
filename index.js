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

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const sequelize = new Sequelize('test_db', username, password, {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

testConnection()
  .then()
  .catch(err => console.log(err))

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

/**
 * Department Routes
 */
// app.route('/departments/:id')
//   .get(getDepartment)
//   .put(updateDepartment);

// /**
//  * Project Routes
//  */
// app.route('/projects/:id')
//   .get(getProject)
//   .put(updateProject);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});