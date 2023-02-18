import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <Link to="/products">Go back to all products</Link>
        </>
    )
};

export default ProductDetailPage;