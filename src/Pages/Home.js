import {Container, Row, Col} from 'react-bootstrap'

const Home = (props) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xxl="4" className="bg-primary">Columna 1</Col>
                    <Col xxl="4" className="bg-warning">Columna 1</Col>
                    <Col xxl="4" className="bg-danger">Columna 1</Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;