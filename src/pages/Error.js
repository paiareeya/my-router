import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="error">
            <h2>404</h2>
            <p>page not found</p>
            <Link to="/" className="btn">
                Back Home
            </Link>
        </section>
    );
};

export default Error;