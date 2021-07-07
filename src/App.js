import './App.css';
import Navigation from './layouts/Navigation';
import Page from './layouts/Page';

let name = "Michał Szeniak";

const reverseName = (name) => name.split(' ').reverse().join(' ')

console.log(reverseName(name))


function App() {
  return (
    <div className="App">
      <Navigation />
      <Page />
    </div>
  );
}

export default App;
