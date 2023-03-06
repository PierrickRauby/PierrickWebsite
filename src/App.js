import logo from './logo.svg';
import './App.css';
import './PierrickNavbar.js';

function App() {
  return (
    <div className="App">
      <head>
<title>Hello</title>
      </head>
< PierrickNavbar/>
      <body>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <button class="nav-link active" aria-current="page" href="#">Active</button>
      </li>
      <li class="nav-item">
            <button class="nav-link " aria-current="page" href="#">Active</button>
      </li>
      <li class="nav-item">
            <button class="nav-link " aria-current="page" href="#">Active</button>
      </li>
      <li class="nav-item">
            <button class="nav-link " aria-current="page" href="#">Active</button>
      </li>
    </ul>
      </body>
    </div>
  );
}

export default App;
