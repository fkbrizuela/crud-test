import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ShowProductsCopy.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Item = ({ product, DeleteProduct }) => {

    return (
        <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{product.category}</ListGroup.Item>
                    <ListGroup.Item>${product.price}</ListGroup.Item>
                    <ListGroup.Item>ID: {product.id}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Link to={`/edit/${product.id}`} className="btn btn-primary">Editar</Link>
                    <button onClick={() =>  DeleteProduct(product.id) } className='btn btn-danger' >Eliminar</button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Item