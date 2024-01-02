import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/productsSlice";
import { addToCart } from "../Store/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { products } = useSelector((state) => state.products);
  let categories = [];
  products?.filter((item) => {
    if (!categories.includes(item.category)) categories.push(item.category);
  });
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold text-center">All Products</h1>
      <div className="w-full h-full flex gap-4 justify-center align-center m-4 flex-wrap">
        {products?.map((product) => (
          <div
            className="w-1/5 border p-2 flex flex-col items-center gap-2 text-center min-w-72"
            key={product.id}
          >
            <img src={product.image} className="h-[300px] w-[260px]" alt="" />
            <h3 className="tetx-xl font-bold">{product?.title}</h3>
            <h4 className="text-xl font-bold">$ {product?.price}</h4>
            <h4>
              {product?.category.toUpperCase()}- Rating: {product?.rating?.rate}{" "}
              ({product?.rating?.count})
            </h4>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="border bg-slate-200 p-2 px-4 font-bold rounded-sm hover:bg-violet-400"
            >
              Add to Cart
            </button>

            {/* {product?.image} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
