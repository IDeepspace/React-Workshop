import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//只会更新必要的元素demo
// import React from 'react';
// import ReactDOM from 'react-dom';

// const tick = () => {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)
