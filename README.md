# Airea

Airea is a fork of [Zeno](https://github.com/nebulaservices/zeno), which adds new themes, search engines and possibly more features
---
# Hosting
Currently there is only one method for hosting Airea. (Docker Image and hosting coming soon!)
* Clone this repositorr:
```bash
$ git clone https://github.com/unblocked-haven/airea.git
```
* Move into the directory
```bash
$ cd airea
```
* Install dependencies:
```bash
$ npm ci
```

### Using Node or NPM Start
* If you wih to use something like PM2 and not Node for easier background deployment [Follow this link](#using-pm2)
* Build the project:
```bash
$ npm run build
```
* Start the server:
```bash
$ npm start
```
* Open your browser and go to `http://localhost:3001`
### Using PM2
* Follow Examples above until you hit [Using Node or NPM Start](#using-node-or-npm-start) then follow these instructions.
* Install PM2:
```bash
$ npm i -g pm2
```
* Build the project:
```bash
$ npm run build
```
* Start the server:
```bash
$ pm2 start npm --name "airea" 
```
* Or 
```bash
$ pm2 start ecosystem.config.cjs --name airea
```
* Open your browser and go to `http://localhost:3001`
---
More Documentation to come.
---
