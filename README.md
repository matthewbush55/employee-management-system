# Employee Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

This application allows users to manage a database of employees. Information includes employee id, name, role, department, and salary information. New employees, departments, and roles can be added as needed. It also displays all employees with their information in a tabular format. This app is CLI-based and uses `node.js`, `JavaScript`, `Inquirer`, `mySQL`, `dotenv`, and `ascii-art`.

![Walkthrough](assets/images/Walkthrough.gif)

## Installation

To install necessary dependencies, add the following items to you package.json file and run `npm i`:

    "asciiart-logo": "^0.2.6",
    "console.table": "^0.10.0",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "inquirer": "^8.1.2",
    "mysql2": "^2.3.0",
    "sequelize": "^6.6.5"

Database Setup:

1. Create the database by running the contents of the `schema.sql` file in `mySQL`.
2. Seed the database by running the contents of the `seeds.sql` file `mySQL`.

## Usage

After pulling down the repository, you must create a`.env` file in the root directory and complete the below required environmental variables you chose when you setup your database.

    DB_HOST=<usually localhost>
    DB_USER=<username to connect to database>
    DB_PASS=<password to connect to database>
    DB_NAME=<name of database>
    DB_PORT=<port to connect to database>

When that is complete, start the app by running `npm start` in your terminal or CLI. Then, use the arrow keys to select an option and press ENTER. Complete the prompts and continue to choose other options until you are finished. At that time, you can exit the app by choosing QUIT.

## License

This project is licensed under [License: MIT](https://opensource.org/licenses/MIT)

## Contributing

To contribute to this project (or any others), please contact me using the information in the Questions section below or by submitting a pull request.

> For more information on project contribution guidelines, please reference [Contributor Covenant](https://www.contributor-covenant.org/)

## Questions?

If you have any questions, please feel free to reach out. Thanks!

GitHub: https://github.com/matthewbush55

Email: matthewbush55@gmail.com
