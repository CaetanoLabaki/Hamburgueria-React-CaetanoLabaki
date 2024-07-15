import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";


export const HomePage = () => {
   const localCartList = localStorage.getItem("@MYLIST");

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
   const [loading, setLoading] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [search, setSearch] = useState("");   

   useEffect(() => {
      const loadData = async () => {
         try {
            setLoading(true);
            const response  = await fetch ("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
            const json = await response.json();            
            setProductList(json);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
      loadData();
   }, []);

   const productsResults = productList.filter((product) => {
      const searchFilter = search === "" ? true : product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase());
      return searchFilter;   
   });   

   const addFood = (product) => {
      if(cartList.some(item => item.id === product.id)) {
         alert("Esse produto ja foi inserido")
      }
      else { 
         setCartList([...cartList, product])
      }
   };

   const removeFood  = (productId) => {
      const newCartList = cartList.filter(product => product.id !== productId);
      setCartList(newCartList);
   }
   
   useEffect(() => {
      localStorage.setItem("@MYLIST", JSON.stringify(cartList))
   }, [cartList]);

   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList} setSearch={setSearch}/>
         <main>
            <ProductList loading={loading} addFood={addFood} productsResults={productsResults} search={search} />
            {isOpen ? <CartModal cartList={cartList} removeFood={removeFood} setIsOpen={setIsOpen} setCartList={setCartList}/> : null}
         </main>
      </>
   );
};
