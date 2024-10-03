// add.js

// Importing required modules
const fs = require('fs');  // File system module to work with files and directories
const path = require('path');  // Path module to manage file and directory paths

// Define the path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists, if not, create it
if (!fs.existsSync(logsDir)) {
    console.log('Logs directory not found. Creating a new Logs directory...');
    fs.mkdirSync(logsDir);  // Create Logs directory
    console.log('Logs directory created successfully.');
} else {
    console.log('Logs directory already exists.');
}

// Switch the current working directory to Logs
process.chdir(logsDir);

// Create 10 log files with content
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;  // Name each file as log0.txt, log1.txt, etc.
    const content = `This is log file ${i}`;  // Content for each log file

    // Create the log file and write the content inside it
    fs.writeFileSync(fileName, content);
    
    console.log(`Created file: ${fileName}`);  // Inform the user that the file is created
}

console.log('All 10 log files have been created.');
