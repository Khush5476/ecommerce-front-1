import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

 export function CartContextProvider({children}){
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProjects,setCartProjects] = useState([]);
    useEffect(() => {
        if (cartProjects?.length > 0){
            ls?.setItem('cart',JSON.stringify(cartProjects))
        }
    }, [cartProjects])

    useEffect(() => {
        if(ls && ls.getItem('cart')){
            setCartProjects(JSON.parse(ls.getItem('cart')))
        }
    }, [])
    function addProject(projectId){
        setCartProjects(prev => [...prev,projectId])
    }
 return(
    <CartContext.Provider value={{cartProjects,setCartProjects,addProject}}>
        {children}
    </CartContext.Provider>
 )
}