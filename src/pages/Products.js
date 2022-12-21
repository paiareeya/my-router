import { Link } from 'react-router-dom';
import products from '../data'

const Product = () => {
    return (
        <section className="product">
            <h2>Products</h2>
            <div className="product">
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h5>{product.name}</h5>
                            <Link className='info' to={`/product/${product.id}`}>more info</Link>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Product;