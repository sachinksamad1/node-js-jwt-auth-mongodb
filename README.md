# Node.js Express JWT Authentication with MongoDB & Roles

This project demonstrates a robust and secure user authentication system built with Node.js, Express.js, JSON Web Tokens (JWT), and MongoDB. It incorporates role-based access control to manage user permissions.

## Features

* **User Registration:** Allows new users to create accounts with secure password hashing.
* **User Login:** Authenticates existing users and generates a JWT upon successful login.
* **JWT Authentication:** Protects API routes by verifying the authenticity and integrity of JWTs sent in request headers.
* **Role-Based Access Control (RBAC):** Implements different user roles (e.g., admin, user) with varying levels of access to application resources.
* **MongoDB Integration:** Utilizes MongoDB as the database to store user information and roles.
* **Password Hashing:** Employs bcrypt for securely storing user passwords.
* **Route Protection:** Demonstrates how to protect specific routes based on user roles.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Minimal and flexible Node.js web application framework.
* **JSON Web Tokens (JWT):** Industry standard for creating secure, stateless authentication tokens.
* **MongoDB:** NoSQL document database.
* **Mongoose:** Elegant MongoDB object modeling for Node.js.
* **bcrypt:** Library for hashing passwords.
* **jsonwebtoken:** Library for working with JWTs.
* **dotenv:** Loads environment variables from a `.env` file.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js:** (version >= 14) - [Download Node.js](https://nodejs.org/)
* **npm** (Node Package Manager) - usually comes bundled with Node.js
* **MongoDB:** (locally installed or a cloud-based instance) - [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sachinksamad1/node-js-jwt-auth-mongodb.git
    cd node-js-jwt-auth-mongodb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    * Create a `.env` file in the root directory of the project.
    * Add the following environment variables (replace with your actual values):

        ```env
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/your_database_name
        JWT_SECRET=your_secret_key_for_jwt
        ```

4.  **Start the MongoDB server:**
    Ensure your MongoDB server is running.

5.  **Run the application:**
    ```bash
    npm start
    ```

    The server will start on the port specified in your `.env` file (default is 3000).

## API Endpoints

#### Test the API Endpoints
Use tools like Postman or cURL to interact with the API.

##### Register a New User
  Endpoint: POST /api/auth/signup
  Body:
      
        {
          "username": "john_doe",
          "email": "john@example.com",
          "password": "password123"
        }
  Response:

        {
          "message": "User was registered successfully!"
        }
  Note: All users are assigned the user role by default. More privileged roles should not be obtained through registration, but directly through database access.

##### Login
  Endpoint: POST /api/auth/signin
  Body:

    {
      "username": "john_doe",
      "password": "password123"
    }
  Response:
      
    {
      "id": "user_id",
      "username": "john_doe",
      "email": "john@example.com",
      "roles": ["ROLE_USER"],
      "accessToken": "jwt_token"
    }
##### Access Public Resource
Endpoint: GET /api/test/all

Response:

    Public Content.

##### Access Protected Resource (User)
Endpoint: GET /api/test/user

Headers:

    Authorization: Bearer <jwt_token>

Response:

    User Content.

##### Access Admin Resource
Endpoint: GET /api/test/admin
Headers:

    Authorization: Bearer <jwt_token>

Response:

    {
      "message": "Require Admin Role!"
    }
Note: Only users with the admin role can access this endpoint.

##### Access Moderator Resource

Endpoint: GET /api/test/mod

Headers:

    Authorization: Bearer <jwt_token>

Response:

    {
      "message": "Require Moderator Role!"
    }
Note: Only users with the admin role can access this endpoint.

## How to Contribute

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -am 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Create a new Pull Request.

## Acknowledgements

* [Express.js](https://expressjs.com/)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
* [Mongoose](https://mongoosejs.com/)
* [dotenv](https://github.com/motdotla/dotenv)

## License
[MIT](LICENSE) 


