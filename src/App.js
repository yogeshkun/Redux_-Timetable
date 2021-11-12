import logo from './logo.svg';
import './App.css';
import TimeTable from './container/GetWeekDays'
import Header from './container/Header'
import {
  Row,
  Container,
  
} from 'react-bootstrap';
function App() {
  return (
    <Container fluid>
      <Header />
      <TimeTable />
    </Container>
  );
}

export default App;
