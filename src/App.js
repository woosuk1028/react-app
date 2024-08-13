import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from 'components/layout/Header';
import Content from 'components/layout/Content';
import Footer from 'components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import { fetchSearchData } from 'services/api/search';

function App() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (search) => {
        try {
            const result = await fetchSearchData(search);
            setSearchResults(result);
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <BrowserRouter>
        <div className="App">
            <Header onSearch={handleSearch} />
            <Content searchResults={searchResults} />
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
