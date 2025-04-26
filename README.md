# Paste Manager

A simple React-based application for creating, updating, viewing, and managing text pastes. This project uses **Redux Toolkit** for state management, **React Router** for navigation, and **TailwindCSS** for styling.

## Features

- **Create Paste**: Add a new paste with a title and content.
- **Update Paste**: Edit an existing paste.
- **View Paste**: View the details of a specific paste.
- **Delete Paste**: Remove a paste from the list.
- **Search Pastes**: Search for pastes by title.
- **Copy to Clipboard**: Copy paste content to the clipboard.
- **Persistent Storage**: Pastes are saved in `localStorage` for persistence.

## Tech Stack

- **Frontend**: React, React Router, TailwindCSS
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Notifications**: react-hot-toast

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/paste-manager.git
   cd paste-manager

2. Install Dependencies:
    ```sh
    npm install

3. Start the Development Server
    ```sh
    npm run dev

4. Open in your browser at
[http://localhost:5173](http://localhost:5173)


## Folder Structure:

```plaintext
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── [Home.jsx]
│   │   ├── [Navbar.jsx]
│   │   ├── [Paste.jsx]
│   │   └── [ViewPaste.jsx]
│   ├── redux/
│   │   └── [pasteSlice.js]
│   ├── [App.css]
│   ├── [App.jsx]
│   ├── [index.css]
│   ├── [main.jsx]
│   └── [store.js]
├── .gitignore
├── [eslint.config.js]
├── [index.html]
├── [package.json]
├── [README.md]
└── [vite.config.js]
```