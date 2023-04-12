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
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Alice', 'Johnson', 3, 1),
  ('Bob', 'Brown', 4, 1),
  ('Charlie', 'Davis', 5, 3),
  ('David', 'Garcia', 2, 2),
  ('Ella', 'Hernandez', 5, 3),
  ('Fiona', 'Martinez', 5, 3);