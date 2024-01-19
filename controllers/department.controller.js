
export async function getDepartments(req, res) {
  res.send({ departments: ['find a way to get the Departments from the DB!'] })
};

export async function getDepartment(req, res) {
  res.send({ department: { id: req.params.id } })
};

export async function createDepartment(req, res) {
  res.send({ department: "find a way to create a new Departments" })
};

export async function updateDepartment(req, res) {
  res.send({ department: "find a way to update an existing Department with id: " + req.params.id })
};
