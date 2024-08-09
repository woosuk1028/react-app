import React from 'react';
import Search from 'components/Search/Search';
import Button from 'components/common/Button/Button';

const Header = () => {
    return (
        <header>
            <div className="left">logo</div>
            <div className="right">
                <Search />

                <div style={{padding: '0px 20px'}}>
                <Button
                    title="등록"
                    variant="success"
                    onClick={() => alert('success clicked!')}
                />
                </div>
            </div>
        </header>
    );
};

export default Header;