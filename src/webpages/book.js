import React, { useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";


const Book = props => {

    var id = props.match.params.id

    const [error, setError] = useState(null);
    const [error1, setError1] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedA, setIsLoadedA] = useState(false);
    const [book, setUser] = useState([]);
    const [author, setAuthor] = useState([]);
    var id_Author = 4
    
    useEffect(() => {
        fetch("https://sleepy-tundra-68059.herokuapp.com/api/books/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    id_Author = data.author_id;
                    setUser(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    
    //relates to author data
    useEffect(() => {
        fetch("https://sleepy-tundra-68059.herokuapp.com/api/authors/" + id_Author)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setAuthor(data);
                    setIsLoadedA(true);
                },
                (error1) => {
                    setIsLoadedA(true);
                    setError(error1);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (book) {
        return (
            

            <div class="col d-flex justify-content-center">


                <Card  style={{ width: '50rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title> {book.name} </Card.Title>

                    <Card.Text style={{padding: '15px'}}>

                    <div>
                    Publisher: {book.publisher}
                    </div>
                    <div>
                    Isbn: {book.isbn}
                    </div>
                    <div>
                    Number of pages: {book.number_of_pages}
                    </div>
                    <div>
                    Media type: {book.media_type}
                    </div>
                    <div>
                    Country: {book.country}
                    </div>
                    {/* <div>
                    author id: {book.author_id}
                    </div> */}
                    <div>
                    author id: {author.name}
                    </div>
                    <div>
                    Url: <Link >{book.url} </Link>
                    </div>

                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>


                {/* <h1> {book.name} </h1>
                <div>
                    Publisher: {book.publisher}
                </div>
                <div>
                    Country: {book.country}
                </div>
                <div>
                    Url: <Link >{book.url} </Link>
                </div> */}
            </div>
        );
    }
}



export default Book;