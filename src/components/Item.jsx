import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ShowProductsCopy.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Item = ({ product, DeleteProduct }) => {

    return (
        <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>${product.precio}</ListGroup.Item>
                    <ListGroup.Item>${product.stock}</ListGroup.Item>
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
