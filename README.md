# Full-Stack Application

The Full Stack Generator is a Node.js command-line tool packaged for npm, designed to streamline the initiation of full-stack applications. This tool automates the creation of a project structure that includes both a React Vite frontend and an ASP.NET Core backend. Users can quickly set up a full-stack development environment by installing the package globally and using a simple command to generate a new full-stack application in their desired directory.

## Getting Started

Follow the instructions below to set up and run the full-stack application on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [.NET Core SDK](https://dotnet.microsoft.com/download)

### Usage

1. Install the package globally:

   ```bash
   npm install -g full-stack-generator
   ```

2. Generate a new full-stack application:

   ```bash
   generate-fullstack <yourAppName>
   ```

3. Follow any additional prompts or instructions during the generation process.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/saitnyalcin/fullstack-generator
   ```

2. Change into the project directory:

   ```bash
   cd fullstack-generator
   ```

3. Run the following command to generate a full stack application:

   ```bash
   generate-fullstack <yourAppName>
   ```

#### Frontend (React Vite)

1. Change into the `frontend` directory and install the dependencies:

   ```bash
   cd frontend
   ```

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the React development server.

3. Open your browser and navigate to https://localhost:5173 to view the front end.

#### Backend (ASP.NET Core)

1. Change into the `backend` directory:

   ```bash
   cd backend
   ```

2. Run the backend application:

   ```bash
   dotnet run
   ```

   This will start the ASP.NET Core backend server.

3. Open your browser and navigate to the application URL that is mentioned in the launch settings to view the backend.

### Customization

- You can customize the frontend by modifying files in the `frontend` directory.
- The backend can be customized by modifying files in the `backend` directory.

### Additional Information

For more details about the tools used in this project, refer to the official documentation:

- [React (Vite)](https://vitejs.dev/)
- [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/)

## License

This project is licensed under the [MIT License](LICENSE).
