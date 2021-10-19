# WebApp
Graphical client for showing data from backend endpoints

# Prerequisites
- Node.js (LTS)

# Run it
2. go to ```<root of repo>\WebApp```
3. Install dependencies: ```npm install```
3. Run tests: ```npm test```
3. Run application: ```npm start```
    - Starts a Angular development server on https://localhost:9100
4. Open the url on you browser

# Run with docker
1. Build:
    - ```docker build -t webapp .```
2. Run
    - ```docker run --name webapp -p 9100:80 portal```

# Packages used:
- CSS framework: [Tailwindcss](https://tailwindcss.com/), and inspiration from [Tailwind components](https://tailwindcomponents.com/)
  - helps with responsive design, and dark mode
- [Prettier](https://prettier.io/) for code formating
