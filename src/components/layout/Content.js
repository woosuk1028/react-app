import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import SearchPage from 'pages/Search/SearchPage';
import CreatePage from 'pages/Create/CreatePage';

const Content = ({ searchResults }) => {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage searchResults={searchResults} />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>
        </div>
    );
};

export default Content;