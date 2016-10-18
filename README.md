# tutorial
This is a project to keep track of learning steps in the world of coding

1. Started with ES6 tutorial on https://egghead.io
2. Installed node.js 
$ npm init

3. Installed Webpack and Babel
$ npm install --save-dev babel-core babel-preset-es2015
$ npm install --save-dev babel-loader
$ npm install --save jquery babel-polyfill
$ npm install --save-dev webpack

Webpack did not compile without indtalling it -g
$ sudo npm install webpack -g

Intstallation faild so I had to delete node-modules folder and reinstall
$ rm -rf node_modules
$ npm install

4. Introduced gitignore
First had to un-track folders
$ git rm . -r --cached
$ git add .
$ git commit -m "fixed untracked files"
save .gitignore

5. $ webpack --watch

6. adding Reactive-Extensions / rx-node 
$ npm install rx-node--save

7. React 
$ npm install react react-dom --save
$ npm install babel-preset-react --save
$ npm install babel webpack-dev-server -g

8. Create new reposityory on command line
$ echo "# d3" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/soosa/d3.git
$ git push -u origin master

9. Installing Express
$ npm install express --save

//Use the application generator tool, express-generator, to quickly create an application skeleton.
$ npm install express-generator -g

For example, the following creates an Express app named myapp in the current working directory:
$ express myapp

On MacOS or Linux, run the app with this command:
$ DEBUG=myapp:* npm start

On Windows, use this command:
> set DEBUG=myapp:* & npm start
