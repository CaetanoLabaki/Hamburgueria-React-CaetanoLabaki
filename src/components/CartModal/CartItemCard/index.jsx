import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeFood }) => {
   return (
      <li className={styles.foodCart}>
         <div className={styles.cartLeft}>
            <div className={styles.foodImg}>
               <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.foodInfo}>
               <h3 className="title">{product.name}</h3>
               <span className="paragraph price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button className={styles.btnRemove} onClick={() => removeFood(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
