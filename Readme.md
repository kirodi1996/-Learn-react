# Chapter 1
- Vs code use build in Emmet (html:5)
- Install in react in two ways 
    - CDN - contact delivery network
        - use React.createElement() to create Element // core thing of React
            It uses there arguments 
            1. tag name
            2. attributes of tags
            3. inner html of tag
        - React need root to know where that want to perform actions
        - React child should have unique key in list
        - Order of file import of cdn and App.js matters
    - npm

# Chapter 2
- To configure npm - npm init / npm init -y
- this will create package.json and which is configuration of npm.
- Bundler - Helps to minified the all htmls css and js files to push on the production. (Ex parcle, webpacl, vite).
- Dependency (Dev and normal)
- package.json have ~ or ^ and package-lock.json have exact version of package.
- build app using parcel - npx parcel source_file
- npm - for executing a installed package
- TO setup react in our code using npm
    - install react using npm - npm i react
    - install react-dom using npm - npm i react-dom
    - import React from 'react' to use React keyword in App.js and ReactDOM from 'react-dom'
- To add support of multiple browsers in our app we use browserslist configuration. refer package.json file

# Chapter 3

- Mention scripts in package.json
- npm run start / build
- React element is an object and when it renders into the dom it becomes html element.
- JSX is not part of react.
- how can we create h1 tag using JSX - const headingJSX = <h1>Hi</h1> (This is also a react element)
- JSX is not html in js
- const heading = React.createElement("h1", {id: 'heading'}, 'Hi') and const jsxHeading = <h1 id = 'heading'>Hi</h1> both are same
- Parcel tanspiled the jsx to js with the help of babel
- JSX code transpiled to React.createElement
- In jsx if we want to write syntax in multiple line we should wrap in ().
- Two type of component
    - Class based component
    - Function component - It's a normal js function that return JSX.
- root.render(reactElement) // renders only React element not component
- root.render(<ReactComponent />) // render React component
- {} inside () jsx we can run any js code
- jsx take care of injection attack