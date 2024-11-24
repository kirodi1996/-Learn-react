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