// remove.js

// Importing required modules
const fs = require('fs');  // File system module to interact with the file system
const path = require('path');  // Path module to handle and transform file paths

// Define the path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
    console.log('Logs directory found. Starting to delete log files...');

    // Read all files in the Logs directory
    const files = fs.readdirSync(logsDir);

    // Loop through each file and delete it
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);  // Inform the user about the file being deleted
        fs.unlinkSync(filePath);  // Delete the file
    });

    // After deleting all the files, remove the Logs directory itself
    fs.rmdirSync(logsDir);
    console.log('Logs directory and all log files have been successfully removed.');
} else {
    console.log('Logs directory not found. Nothing to delete.');
}
