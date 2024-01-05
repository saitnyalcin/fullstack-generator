# Full-Stack Application

This project is a full-stack application generated using Node.js, npm, and .NET Core. It consists of a frontend built with React (Vite) and a backend built with ASP.NET Core.

## Getting Started

Follow the instructions below to set up and run the full-stack application on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [.NET Core SDK](https://dotnet.microsoft.com/download)

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
   node index.js myapp
   ```

### Usage

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
