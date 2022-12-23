// import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar.js';
import TabsFilters from './tabsFilters.js';
import Carts from './carts.js';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <Topbar />
        <TabsFilters />
        <Carts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
