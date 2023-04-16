import React from 'react';
import FooterComponent from 'src/components/FooterComponent';
import HeaderComponent1 from 'src/components/HeaderComponent1';

const Format1 = ({ children }) => {
    return (<>
        <HeaderComponent1 />
        <div className='app'>
            <main>
                {children}
            </main>
        </div>
        <FooterComponent />
    </>);
}

export default Format1;