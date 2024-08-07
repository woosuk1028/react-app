import React from 'react';
import {StyledSearch} from './styled';

const Search = () => {
    return (
        <StyledSearch>
            <input type="text" placeholder="검색어 입력"/>
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
        </StyledSearch>
    );
}

export default Search;