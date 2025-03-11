import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [disableButton, setDisableButton] = useState(false);
    async function fetchProduct() {
        try {
            setLoading(true);
            setErrorMsg(null);
            const res = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const data = await res.json();
console.log(data);
            if (data?.products?.length > 0) {
                setProducts((prevProducts) => {
                    const newProducts = data.products.filter(
                        (newItem) => !prevProducts.some((prevItem) => prevItem.id === newItem.id)
                    );
                    return [...prevProducts, ...newProducts];
                });
            } else {
                setErrorMsg("No more products available.");
            }
        } catch (error) {
            setErrorMsg(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [count]);
    if (products && products.length > 100) {
        setDisableButton(true);
    }
    return (
        <div className="load-more-data">
            {errorMsg && <div className="error">{errorMsg}</div>}
            {loading && <div>Loading data! Please wait</div>}
            <div className="product-container">
                {products.length > 0 ? (
                    products.map((item) => (
                        <div key={item.id} className="product">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
            <div>
                <button onClick={() => setCount((prev) => prev + 1)} disabled={disableButton}>
                    Load More Data
                </button>

                {
                    disableButton && <p>No more products available</p>
                }
            </div>
        </div>
    );
}
