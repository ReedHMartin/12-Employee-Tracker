-- TODO: Create the schema for the `department` table
-- - id: INT PRIMARY KEY
-- - name: VARCHAR(30) to hold department name

-- TODO: Create the schema for the `role` table
-- - id: INT PRIMARY KEY
-- - title: VARCHAR(30) to hold role title
-- - salary: DECIMAL to hold role salary
-- - department_id: INT to hold reference to department role belongs to

-- TODO: Create the schema for the `employee` table
-- - id: INT PRIMARY KEY
-- - first_name: VARCHAR(30) to hold employee first name
-- - last_name: VARCHAR(30) to hold employee last name
-- - role_id: INT to hold reference to employee role
-- - manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
