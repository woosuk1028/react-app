import React from 'react';
import Search from 'components/Search/Search';
import Button from 'components/common/Button/Button';

const Header = () => {
    return (
        <header>
            <div className="left">logo</div>
            <div className="right">
                <Search />

                <Button
                    title="success Button"
                    variant="success"
                    onClick={() => alert('success clicked!')}
                />
            </div>
        </header>
    );
};

export default Header;