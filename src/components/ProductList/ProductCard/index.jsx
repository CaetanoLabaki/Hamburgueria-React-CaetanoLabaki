import styles from "./style.module.scss";

export const ProductCard = ({ addFood, product }) => {

    return (
        
        <li className={styles.card}>
            <div className={styles.cardImg}>
                <img className={styles.img} src={product.img} alt={product.name} />
            </div>
            <div className={styles.cardInfo}>
                <h3 className="title">{product.name}</h3>
                <span className="paragraph">{product.category}</span>
                <span className="paragraph price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button className="btn card" onClick={() => addFood(product)}>Adicionar</button>
            </div>
        </li>
    )
}