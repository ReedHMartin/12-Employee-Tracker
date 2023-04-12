-- Insert sample data into the `department` table
INSERT INTO department (name)
VALUES
  ('Human Resources'),
  ('Engineering'),
  ('Sales');

-- Insert sample data into the `role` table
INSERT INTO role (title, salary, department_id)
VALUES
  ('HR Manager', 70000, 1),
  ('Software Engineer', 80000, 2),
  ('Sales Manager', 75000, 3),
  ('HR Assistant', 40000, 1),
  ('Sales Associate', 50000, 3);

-- Insert sample data into the `employee` table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Samantha', 'Carter', 1, NULL),
  ('Daniel', 'Jackson', 2, 1),
  ('George', 'Hammond', 3, 1),
  ('Jonas', 'Quinn', 4, 1),
  ('Cameron', 'Mitchel', 5, 3),
  ('Hank', 'Landry', 2, 2),
  ('Janet', 'Fraiser', 5, 3),
  ('Walter', 'Harriman', 5, 3);