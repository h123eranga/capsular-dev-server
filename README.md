# Capsular Dev Server

Capsular Dev Server is the application which helps you to run your Capsular Single Page Applications.

# Installation

```
npm install capsdev --save
```

# How to use?

```
import { CapsularDevServer } from 'capsdev'

// startApp(port, relativePath, absolutePath)
// port: which servers the app on
// relativePath: path inject loading resources
// absolutePath: where exactly files located

CapsularDevServer.startApp(3000, "/lib", "/static");

```