-- Create the schema for the `department` table
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- Create the schema for the `role` table
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- TODO: Create the schema for the `employee` table
-- - id: INT PRIMARY KEY
-- - first_name: VARCHAR(30) to hold employee first name
-- - last_name: VARCHAR(30) to hold employee last name
-- - role_id: INT to hold reference to employee role
-- - manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
