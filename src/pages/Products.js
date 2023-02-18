import { Link } from 'react-router-dom';

const buildProducts = () => {
    const products = [];

    for(let i = 1; i < 16; i++) {
        products.push({
            id: `product-${i}`,
            title: `Product ${i}`
        });
    }

    return products;
}

const ProductsPage = () => {
    return (
        <>
            <h1>Products page</h1>
            <ul>
                {
                    buildProducts().map(p => <li key={p.id}><Link to={`/products/${p.id}`}>{p.title}</Link></li>)
                }
            </ul>
        </>
    );
};

export default ProductsPage;