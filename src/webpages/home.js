import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';




const Home = () => {
    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [books, setBooks] = useState([]);
        useEffect(() => {
            fetch("https://sleepy-tundra-68059.herokuapp.com/api/books")
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setBooks(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
          }, [])
    if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div style={{margin: 30 }} class="col d-flex justify-content-center">

                <Card style={{ width: '18rem' }}>
                <Card.Header>Books</Card.Header>
                <ListGroup variant="flush">
                {books.map(book => (
                <ListGroup.Item><Link to={`book/${book.id}`}>{book.name} </Link></ListGroup.Item>
                ))}
                </ListGroup>
                </Card>

                </div>

                // <Card style={{ width: '18rem' }}>
                // <Card.Header>Featured</Card.Header>
                // <ListGroup variant="flush">
                //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
                //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                //     <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                // </ListGroup>
                // </Card>


            );
        }
    }

export default Home;