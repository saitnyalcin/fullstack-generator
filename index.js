#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const generateFullStackApp = (appName) => {
  const rootDir = path.join(process.cwd(), appName);
  const frontendDir = path.join(rootDir, "frontend");
  const backendDir = path.join(rootDir, "backend");

  // Create root directory
  fs.mkdirSync(rootDir);

  // Create frontend and backend directories
  fs.mkdirSync(frontendDir);
  fs.mkdirSync(backendDir);

  // Initialize frontend (React Vite)
  execSync(`npm create vite@latest frontend -- --template react-ts`, { cwd: rootDir });

  // Initialize backend (ASP.NET Core)
  execSync(`dotnet new mvc -n backend`, { cwd: rootDir });

  console.log("Full-stack application has been generated successfully!");
};

// Accept the app name as a command-line argument
const appName = process.argv[2];

if (!appName) {
  console.error("Please provide a name for your full-stack application.");
  process.exit(1);
}

generateFullStackApp(appName);
