import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsOpen,  cartList, setSearch }) => {
   const [value, setValue] = useState("");
   
   const submit = (e) => {
      e.preventDefault();
      setSearch(value);
      setValue("");
   }
  
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
               <div className={styles.carForm}>
                  <button onClick={() => setIsOpen(true)}>
                     <MdShoppingCart size={21} className={styles.carIcon}/>
                     <span className={styles.carNumber}>{cartList.length}</span>
                  </button>
                  <form  id="formSearch" onSubmit={submit} className={`${styles.searchIcon} searchInput`}>
                     <input 
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button className="buttonSearch" type="submit">
                        <MdSearch size={21} />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </header>
   );
};
