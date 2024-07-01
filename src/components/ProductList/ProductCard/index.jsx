export const ProductCard = ({ product }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title">{product.name}</h3>
                <span className="paragraph">{product.category}</span>
                <span className="paragraph price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button>Adicionar</button>
            </div>
        </li>
    )
}