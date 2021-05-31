how to set up new JS environment with npm and babel to start our project

{
    "run (npm init || sudo npm init)"
    "run (npm install @babel/cli @babel/core --save-dev)"
    "run (npm install @babel/preset-env --save-dev)"
}

after that, make file (.babelrc)

then, 
{
    "run (node_modules/.bin/babel filename.js -w -o filename.js)"
    w === 'watch', we run 1x then it's gonna compile everytime we save
    o === 'output', it's where we put the output bundle file
}

that is to compile our modern js script into old vers with babel cli
coz of the above code is to musch to write every time we make a changes,
we can put that inside the package.json at the (script) section then we make
some kind of shortcut to call that compiling code, then we can call it with
{
    "npm run shortcutname"
}

then, if we wanted to use a webpack, we can create a new file
(webpack.config.js)
and config how our web pack gonna be set up

what we write in webpack file is gonna directly run by the computer
with the help of nodeJS, it's compile our file together and bundle it together

after we're finish setting up the file, we need to install the webpack package
for the file able to run
{
    "run (npm install webpack webpack-cli --save-dev)"
}

finish the instalation then we have to run
{
    "node_modules/.bin/webpack -w"
}

for the webpack package to active, or we can make that file a shortcut text to run
with putting it inside the package.json script section then run the shortcut text (like with babel before)

with web pack we can use it to run a local server for us so we don't
have to use other local server package to run our project, 
and how to activate is with instaling webpack dev server
{
    "run (npm install webpack-dev-server@3.11.0)"
}

then you can set the package.json to run webpack server with
(webpack serve)