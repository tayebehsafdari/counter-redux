import React from 'react';
import {Container, Form} from 'react-bootstrap';
import Counter from './Counter';
import './App.scss';

function App() {
    return (
        <Container>
            <Form>
                <Counter/>
            </Form>
        </Container>
    );
}

export default App;
