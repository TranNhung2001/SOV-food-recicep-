import React from 'react';
import BannerComponent from 'src/components/BannerComponent';
import CategoryComponent from 'src/components/CategoryComponent';
import NewRecipeComponent from 'src/components/NewRecipeComponent';
import Format from 'src/layout/format';

const Home = () => {
    return (
        <>
            <Format >
                <BannerComponent />
                <CategoryComponent />
                <NewRecipeComponent />
            </Format>

        </>
    );
}

export default Home;