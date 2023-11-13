// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default App


import React from 'react';
import TaskList from './components/TaskList';

const TodoApp = () => {
  return (
    <div className="container mx-auto my-8 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <TaskList />
    </div>
  );
};

export default TodoApp;

