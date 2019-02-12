'use strict';

console.log('App.js is running!');

// JSX - JavaScript  XML
// var template = ( 
//     <div>
//         <h1>Does this change?</h1>
//         <p>This is some </p>
//         <ol>
//             <li>Item one </li>
//             <li>Item two </li>
//         </ol>
//     </div>
// ); 

var user = {
    name: 'Adam Mathisom',
    age: 36,
    location: 'Minnesota'
};

var userName = 'Mike';
var userAge = 27;
var userLocation = 'New York';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
