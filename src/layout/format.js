import React from 'react';
import FooterComponent from 'src/components/FooterComponent';
import HeaderComponent from 'src/components/HeaderComponent';

const Format = ({ children }) => {
    return (<>
        <HeaderComponent />
        <div className='app'>
            <main>
                {children}
            </main>
        </div>
        <FooterComponent />
    </>);
}

export default Format;