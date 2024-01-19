
export async function getEmployees(req, res) {
 res.send({ employees: ['find a way to get the employees from the DB!'] })
};

export async function getEmployee(req, res) {
 res.send({ employee: { id: req.params.id } })
};

export async function createEmployee(req, res) {
 res.send({ employee: "find a way to create a new employees" })
};

export async function updateEmployee(req, res) {
 res.send({ employee: "find a way to update an existing employee with id: " + req.params.id })
};

export async function fireEmployee(req, res) {
 res.send({ employee: "find a way to delete an employee" })
};
