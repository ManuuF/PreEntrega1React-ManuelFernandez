import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetails/ItemDetails";
import { useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const ItemId = useParams().itemId;
    

    useEffect(() => {
        getProductById(ItemId)
        .then((res) => {
            setProduct(res);
        })
    }, [ItemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer