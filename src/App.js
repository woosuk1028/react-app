import logo from './logo.svg';
import './App.css';
import Header from 'components/layout/Header';
import Content from 'components/layout/Content';
import Footer from 'components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
