import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    return (
        <Card className="Box" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Image src={img} alt={name} thumbnail />
          <Card.Text>
          <section>
            <p className="Info">
                    Categoria: {category}
            </p>
            <p className="Info">
                    Descripcion: {description}
            </p>
            <p className="Info">
                Precio: ${price}
            </p>
            
        </section>
          </Card.Text>
          <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Cantidad Agregada ',quantity)}/>
        </Card.Body>
      </Card>
    )
}

export default ItemDetail