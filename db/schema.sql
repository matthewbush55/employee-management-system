DELETE DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- department table --
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
)
-- role table --
CREATE TABLE role(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE SET NULL,
)
--employee table --
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name title VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE SET NULL
    manager_id INT NOT NULL,
)
