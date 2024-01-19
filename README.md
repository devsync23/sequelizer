## Sequelizer

### Instructions

1. Connect the app to your mysql database

2. Define the models:
https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine
- Employee
  - id
  - name
  - role
  - department_id
  - project_id
- Department
  - id
  - department_name
- Project
  - id
  - project_name

3. fill out the controller functions with sequelize methods to query your data