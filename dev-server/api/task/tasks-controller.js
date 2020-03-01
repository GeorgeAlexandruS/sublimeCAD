export function index (req, res) {
  // find all tasks
  return res.status(200).json();
}

export function create(req, res) {
  //create tasks
  return res.status(201).json();
}

export function update(req, res) {
  //update tasks
  return res.status(204).json();
}

export function remove(req, res) {
  //remove tasks
  return res.status(204).json();
}

export function show(req, res) {
  //get tasks
  return res.status(200).json();
}
