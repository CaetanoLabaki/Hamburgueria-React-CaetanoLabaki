import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ addFood, loading, productsResults}) => {
   return (
      <div className="container">         
            {loading ? (
               <p>Carregando...</p>
            ) : (
               <ul className={styles.flexBox}>
                  {productsResults.map((product) => (
                     <ProductCard key={product.id} product={product} addFood={addFood}/>
                  ))}
               </ul>
            )}         
      </div>
   );
};
