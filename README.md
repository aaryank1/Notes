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
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── [Home.jsx](http://_vscodecontentref_/0)
│   │   ├── [Navbar.jsx](http://_vscodecontentref_/1)
│   │   ├── [Paste.jsx](http://_vscodecontentref_/2)
│   │   └── [ViewPaste.jsx](http://_vscodecontentref_/3)
│   ├── redux/
│   │   └── [pasteSlice.js](http://_vscodecontentref_/4)
│   ├── [App.css](http://_vscodecontentref_/5)
│   ├── [App.jsx](http://_vscodecontentref_/6)
│   ├── [index.css](http://_vscodecontentref_/7)
│   ├── [main.jsx](http://_vscodecontentref_/8)
│   └── [store.js](http://_vscodecontentref_/9)
├── .gitignore
├── [eslint.config.js](http://_vscodecontentref_/10)
├── [index.html](http://_vscodecontentref_/11)
├── [package.json](http://_vscodecontentref_/12)
├── [README.md](http://_vscodecontentref_/13)
└── [vite.config.js](http://_vscodecontentref_/14)