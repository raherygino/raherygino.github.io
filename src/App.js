import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import Content from './components/Content';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="bg-dark-100">
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
