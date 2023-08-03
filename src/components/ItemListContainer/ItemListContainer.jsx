import { useState, useEffect } from "react"
import { getProducts, } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])
    const categoryId = useParams().categoryId;
    console.log(categoryId)

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId){
                    setProducts( res.filter((prod) => prod.categoryId === categoryId) );
                } else {
                    setProducts(res);
                }

                
            })

    }, [categoryId])
    
        
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer