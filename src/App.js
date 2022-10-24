
import './App.css';
import Appbar from './components/Appbar';
import Contain from './components/Contain';
import Body from './components/Contain';
import Underbar from './components/Underbar';

export default function App() {
  return (
    <div className="App">
      <Appbar />
      <hr />
      <Underbar />
      <Contain />
    </div>
  );
}