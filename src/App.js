import './App.css';
import SideBar from './SideBar.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  return (
    <div className='App'>
      <h1>hello</h1>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Input</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <Button>hwllo</Button>
      <Button variant="primary" className="button-main-page"> BOTON</Button>
    </div>
  );
}

export default App;
