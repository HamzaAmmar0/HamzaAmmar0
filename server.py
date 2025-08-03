#!/usr/bin/env python3
"""
Simple HTTP Server for BSNU Faculties Website
Run this script to serve the website locally for development and testing.
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler with better error handling and logging."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def log_message(self, format, *args):
        """Custom logging to show requests in a cleaner format."""
        print(f"[{self.log_date_time_string()}] {format % args}")
    
    def end_headers(self):
        """Add CORS headers for development."""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def check_files():
    """Check if all required files exist."""
    required_files = ['index.html', 'styles.css', 'script.js']
    missing_files = []
    
    for file in required_files:
        if not (DIRECTORY / file).exists():
            missing_files.append(file)
    
    if missing_files:
        print("❌ Missing required files:")
        for file in missing_files:
            print(f"   - {file}")
        return False
    
    print("✅ All required files found!")
    return True

def main():
    """Main function to start the server."""
    print("🚀 BSNU Faculties Website - Local Development Server")
    print("=" * 50)
    
    # Check if required files exist
    if not check_files():
        print("\n❌ Please ensure all required files are present before starting the server.")
        sys.exit(1)
    
    # Change to the directory containing the files
    os.chdir(DIRECTORY)
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"\n🌐 Server started at: http://localhost:{PORT}")
            print(f"📁 Serving files from: {DIRECTORY}")
            print("\n📋 Available URLs:")
            print(f"   - Homepage: http://localhost:{PORT}/")
            print(f"   - HTML File: http://localhost:{PORT}/index.html")
            print(f"   - CSS File: http://localhost:{PORT}/styles.css")
            print(f"   - JS File: http://localhost:{PORT}/script.js")
            print("\n💡 Tips:")
            print("   - Press Ctrl+C to stop the server")
            print("   - Open http://localhost:8000 in your browser")
            print("   - The website supports dark mode toggle")
            print("   - Test responsive design by resizing your browser")
            print("\n🎯 Features to test:")
            print("   - Dark/Light mode toggle")
            print("   - Faculty modal windows")
            print("   - Mobile navigation menu")
            print("   - Contact form (demo mode)")
            print("   - Smooth scrolling navigation")
            print("\n" + "=" * 50)
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped by user (Ctrl+C)")
        print("👋 Thanks for using BSNU Faculties Website!")
        
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"\n❌ Port {PORT} is already in use!")
            print(f"💡 Try using a different port or stop the process using port {PORT}")
        else:
            print(f"\n❌ Error starting server: {e}")
        sys.exit(1)
        
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()