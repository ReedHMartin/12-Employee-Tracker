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

-- TODO: Insert sample data into the `employee` table
-- - Insert 8 different employees with unique first_name and last_name combinations, role_ids, and manager_ids.
-- - Make sure the role_ids match the roles inserted earlier.
-- - Set the manager_id for each employee to reference other employee ids or set it to NULL for employees without a manager.
