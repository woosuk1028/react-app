import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const Content = () => {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default Content;