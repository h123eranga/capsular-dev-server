# Capsular Dev Server

Capsular Dev Server is the application which helps you to run your Capsular Single Page Applications.

# Installation

```
npm install capsular-dev-server --save
```

# How to use?

```
import { CapsularDevServer } from 'capsular-dev-server'

// startApp(port, relativePath, absolutePath)
// port: which servers the app on
// relativePath: path inject loading resources
// absolutePath: where exactly files located

new CapsularDevServer().startApp(3000, "/lib", "/static");

```