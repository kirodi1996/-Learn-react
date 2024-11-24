import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX => babel transpile it to react.createElement ==> ReacElement.js object => HTMLElement(render)
const jsxHeading = (<h1 className='head' tabIndex='1'> Hello </h1>)

console.log (jsxHeading)

// react element
const title = (
    <h1>React element</h1>
)

// React component

const HeadingComponent1 = () => {
    return <h1>Namaste react functional component</h1>
};

const Title = () => (
    <h1>
        Title
    </h1>
);

const number = 1000;

// Component composition
const HeadingComponent = () => (
    <div id='container'>
        <h2>{number}</h2>
        {Title()}
        {title}
        <Title/>
        <h1 className='heading'>Namaste react functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

root.render(<HeadingComponent />)





















// operation of Core react lib
// const heading = React.createElement('h1', {id: 'heading'}, "Hello world from React"); 
// console.log(heading) // return React element

// const child = React.createElement('h1', {id: 'child'}, 'h1 tag');
// const parent = React.createElement('div', {id: 'parent'}, [child, child]);
// const grandParent = React.createElement('div', {id: 'grandParent'}, [parent, parent]);

// // Job of react dom
// const root1 = ReactDOM.createRoot(document.getElementById('root')); 
// root1.render([heading, grandParent]);

