import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from 'components/Search/Search';
import Button from 'components/common/Button/Button';

const Header = ({ onSearch }) => {
    const navigate = useNavigate();

    const handleSearch = (search) => {
        onSearch(search);
        navigate('/search');
    }

    const handleCreate = () => {
        navigate('/create');
    }

    const handleLogo = () => {
        navigate('/home');
    }

    return (
        <header>
            <div className="left" onClick={handleLogo}>logo</div>
            <div className="right">
                <Search onSearch={handleSearch} />

                <div style={{padding: '0px 20px'}}>
                <Button
                    title="등록"
                    variant="success"
                    onClick={handleCreate}
                />
                </div>
            </div>
        </header>
    );
};

export default Header;