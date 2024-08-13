import React from 'react';


const SearchPage = ({ searchResults }) => {
    return (
        <div>
            <h1>검색 결과</h1>
            {searchResults.length > 0 ? (
                <ul>
                    {searchResults.map(result => (
                        <li key={result.seq}>{result.title}</li>
                    ))}
                </ul>
            ) : (
                <p>검색 결과가 없습니다.</p>
            )}
        </div>
    );
};

export default SearchPage;