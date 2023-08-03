import './Item.css'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({id, name, img, category, price, stock}) => {

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
                Precio: ${price}
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
          </Card.Text>
          <Button variant="dark">
            <Link to={`/item/${id}`}>Ver Detalle</Link>
          </Button>
        </Card.Body>
      </Card>
    )
}

export default Item