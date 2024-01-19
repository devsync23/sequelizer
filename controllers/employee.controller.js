import { Employee } from '../models/employee.model';

export async function getEmployees(req, res) {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).send('Internal Server Error');
  }
};
