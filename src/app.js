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
    age : 36, 
    location: 'Minnesota'
}; 

var userName = 'Mike';
var userAge = 27;
var userLocation = 'New York'; 

var template = ( 
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location } </p>
    </div>
); 

var appRoot = document.getElementById('app'); 

ReactDOM.render(template, appRoot); 