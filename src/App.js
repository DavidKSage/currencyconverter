import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Converter from './components/Converter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <Container className="border border-dark mt-3 mb-3 text-center p-3">
          <Row>
          <span className="heading-text">Currency Converter</span>
          </Row>  
      </Container>
      <Converter />
    </div>
  );
}

export default App;