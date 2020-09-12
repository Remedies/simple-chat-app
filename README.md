# simple-chat-application

## Javascript/ES6 Express and Socket.io Chat application

This is a practice application for me to learn the basics of socket.io.

Live site here: https://crc-simple-chat-app.herokuapp.com/

### Requirements

Running this application is simple and only requires a few components.

1. Make sure node.js is installed on your machine
2. Modern Browser running.

### How to Run

1. Clone this repository

```git
git clone https://github.com/Remedies/simple-chat-app
```

2. Run "npm install" in project directory

```git
npm install
```

3. Run "npm run server" in project directory

```git
npm start
```

5. Use multiple browsers to visit http://localhost:5000/ (to simulate multiple clients) and chat with yourself

### Features

-   **Chat in real-time** - This project uses socket.io which allows for real data to be transferred between clients and the express server.

-   **Know if other clients are typing** - Indicator that displays if a client is typing.

### TODO

1. Add front End color customization
2. UI overhaul
3. Add User Login and Authorization
4. Add Chat logs in Database
5. Add time stamps
6. Add ability to create and join rooms with optional passwords
7. Convert to React.js
8. ~~Run Babel for cross browser compatability~~
9. ~~Improve CSS convention / Add SASS~~
