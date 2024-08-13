import React, { useState } from 'react';
import {StyledSearch} from './styled';
import Button from 'components/common/Button/Button';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (onSearch && search.trim() !== '') {
            onSearch(search);
        }
    };

    return (
        <StyledSearch>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="검색어 입력"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" onClick={handleSearch} />
        </StyledSearch>
    );
}

export default Search;