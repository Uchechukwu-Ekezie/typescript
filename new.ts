// import React from 'react';

// const Greeting = ({ name }) => {
//     return <div>Hello, {name}!</div>;
// };

// export default Greeting;


// to Typescript

// import React from 'react';

// // Define a type for the props
// type GreetingProps = {
//     name: string;
// };

// // Use the defined type for props
// const Greeting: React.FC<GreetingProps> = ({ name }) => {
//     return <div>Hello, {name}!</div>;
// };

// export default Greeting;

// number 1 ends here


// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count: 0
//     };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// export default Counter;


// to Typescript

// import React, { Component } from 'react';

// // Define a type for the state
// type CounterState = {
//     count: number;
// };

// // Define a type for the props (if any, empty object in this case)
// type CounterProps = {};

// // Use the defined types for the class component
// class Counter extends Component<CounterProps, CounterState> {
//     state: CounterState = {
//         count: 0
//     };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// export default Counter;
