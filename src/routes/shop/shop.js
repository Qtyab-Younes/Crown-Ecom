import './shop.scss';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview  from '../categories/categories';
import Category from '../category/category';

const Shop = () => {

    return (
        <Routes>
            <Route index element={ <CategoriesPreview />} />
            <Route path=':category' element={ <Category  />} />
        </Routes>
    )
}

export default Shop;