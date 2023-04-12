-- Insert sample data into the `department` table
INSERT INTO department (name)
VALUES
  ('Human Resources'),
  ('Engineering'),
  ('Sales');

-- TODO: Insert sample data into the `role` table
-- - Insert 5 different roles with unique titles, salaries, and corresponding department_ids.
-- - Make sure the department_ids match the departments inserted earlier.

-- TODO: Insert sample data into the `employee` table
-- - Insert 8 different employees with unique first_name and last_name combinations, role_ids, and manager_ids.
-- - Make sure the role_ids match the roles inserted earlier.
-- - Set the manager_id for each employee to reference other employee ids or set it to NULL for employees without a manager.
