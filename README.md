## CarHub Web Application

## Table of Contents

1. [Frontend setup](#Frontend-setup)
2. [Backend setup](#Backend-setup)
3. [Project Structure](#project-structure)

## Frontend setup

**Step #1** - Clone the project

```bash
$ # Create or go to the directory you want to clone the project
$ # Delete the parenthesis and the 'newBranchName' content
$ git clone https://github.com/uprm-inso-4101-2021-2022-s1/semester-project-team-04.git
$ cd semester-project-team-04
$ git checkout -b (newBranchName)
```

**Step #2** - Enter to the frontend directory

```bash
$ # Go to the frontend
$ cd carHub
$ cd frontend
```

**Step #3** - Install dependencies in the frontend

```bash
$ npm install
```

**Step #4** - start frontend at `localhost:5000`

```bash
$ npm start
```

**Step #6** - Stop frontend

Press Ctrl + C

## Backend setup

**Step #1** - Enter to the backend directory

```bash
$ # Go to the backend
$ cd ..
$ cd backend
```

**Step #2** - create virtual environment using python and activate it

```bash
$ # Virtual environment modules installation (Windows based systems)
$ py -m venv env
$ .\env\Scripts\activate
$
$ # Virtual environment modules installation (Unix based systems)
$ # py -m venv env
$ # source env/bin/activate
```

**Step #3** - install dependencies in virtual environment (make sure the venv is activated)

```bash
$ pip install -r requirements.txt
```

**Step #4** - setup `flask` command for our app

```bash
$ export FLASK_APP=app.py
$ export FLASK_ENV=development
```

> Or for Windows-based systems

```powershell
$ (Windows CMD) set FLASK_APP=app.py
$ (Windows CMD) set FLASK_ENV=development
$
$ (Powershell) $env:FLASK_APP = ".\app.py"
$ (Powershell) $env:FLASK_ENV = "development"
```

**Step #5** - start backend at `localhost:5000`

```bash
$ python app.py
```

or

```bash
$ flask run
```

**Step #6** - use `POSTMAN` to test backend

## Project Structure

```bash
carHub/
├── backend
│   ├── .gitignore
│   ├── app.py
│   └── requirements.txt
├── frontend
│   ├── public
│   │   ├── index.html
│   ├── src
│   │   ├── components
│   │   ├── img
│   │   ├── views
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
└── README.md
```
