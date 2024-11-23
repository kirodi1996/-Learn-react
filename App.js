// operation of Core react lib
const heading = React.createElement('h1', {id: 'heading'}, "Hello world from React"); 
console.log(heading) // return React element

const child = React.createElement('h1', {id: 'child'}, 'h1 tag');
const parent = React.createElement('div', {id: 'parent'}, [child, child]);
const grandParent = React.createElement('div', {id: 'grandParent'}, [parent, parent]);

// Job of react dom
const root1 = ReactDOM.createRoot(document.getElementById('root')); 
root1.render([heading, grandParent]);

