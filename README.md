# REACT CHROME EXTENSION

## Overview
This project is a test for creating a React-base Chrome extension.
The assembly of this extension is automated by webpack.

## Setup
Before running this project, ensure that npm and webpack are installed.
If webpack is not installed, run
```bash
npm install -g webpack
```
This will create a global install of webpack.

Once webpack is set up, install the project specific webpack dependecies with,
```bash
npm install
```

To orchestrate a build, run,
```bash
webpack
```
from within the base directory.

This will produce a transpiled Chrome extension in ./bin.