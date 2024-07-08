import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/useKeydown";


export const CartModal = ({ setCartList, cartList, removeFood, setIsOpen}) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);
 

   const removeAllFood = () => {
      setCartList([]);
   }

   const modalRef = useOutclick(() => {
      setIsOpen(false);
  });

  const buttonRef = useKeydown("Escape", (element) => {
   element.click();
}) 


   return (
      <div className="modalOverlay" role="dialog">
         <div ref={modalRef}  className="modalBox">
            <div className="modalHeader">
               <h2 className="title modal">Carrinho de compras</h2>
               <button ref={buttonRef} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               {cartList.length < 1 ? <div className="noproduct"><p className="paragraphModal">Não há produtos no carrinho...</p></div> :
                <ul className="carList">
                {cartList.map((product) => (
                   <CartItemCard key={product.id} product={product} removeFood={removeFood}/>
                ))}
             </ul>               
               }              
            </div>
            <div className="botton">
               <div className="totalValue">
                  <span className="paragraphModal">Total</span>
                  <span className="paragraphModal totalValue">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => removeAllFood()} className="btn modal">Remover todos</button>
            </div>
         </div>
      </div>
   );
};
