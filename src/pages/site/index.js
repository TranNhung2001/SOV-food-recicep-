import React from 'react';
import BannerComponent from 'src/components/BannerComponent';
import CategoryComponent from 'src/components/CategoryComponent';
import NewRecipeComponent from 'src/components/NewRecipeComponent';
import Format1 from 'src/layout/format1';

const Home1 = () => {
    return (
        <>
            <Format1 >
                <BannerComponent />
                <CategoryComponent />
                <NewRecipeComponent />
            </Format1>

        </>
    );
}

export default Home1;