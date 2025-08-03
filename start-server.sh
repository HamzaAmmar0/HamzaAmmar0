#!/bin/bash

echo "🚀 Starting BSNU Faculties Website Server..."
echo

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed"
    echo "💡 Please install Python 3 from https://python.org"
    exit 1
fi

# Make the script executable
chmod +x server.py

# Start the server
python3 server.py