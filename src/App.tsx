import { Col, Container, Row } from 'react-bootstrap'
import './App.scss'
import BarChart from './components/chartjs/BarChart'
import LineChart from './components/chartjs/LineChart'
import PieChart from './components/chartjs/PieChart'
import HighchartsExampleLine from './components/highcharts/HighchartsExampleLine'
import RechartsExampleBar from './components/recharts/RechartsExampleBar'
import RechartsExampleLine from './components/recharts/RechartsExampleLine'
import RechartsExamplePie from './components/recharts/RechartsExamplePie'
import HighchartsExamplePie from './components/highcharts/HighchartsExamplePie'
import HighchartsExampleBar from './components/highcharts/HighchartsExampleBar'

function App() {

  return (
    <>
      <h1 className='display-5 text-center'>Chart.js</h1>
      <Row>
        <Col md='6' xs='12' >
          <LineChart/>
        </Col>
        <Col md='6' xs='12'>
          <BarChart/>
        </Col>
      </Row>
      <Container style={{ height: '50vh'}}>
        <PieChart/>
      </Container>

      <h1 className='display-5 text-center'>Recharts</h1>
      <Row>
        <Col md='6' xs='12' >
          <RechartsExampleLine/>
        </Col>
        <Col md='6' xs='12'>
          <RechartsExampleBar/>
        </Col>
      </Row>
      <Container style={{ height: '50vh'}}>
        <RechartsExamplePie/>
      </Container>
      
      <h1 className='display-5 text-center'>HighCharts</h1>
      <Row>
        <Col md='6' xs='12' >
        <HighchartsExampleLine/>
        </Col>
        <Col md='6' xs='12'>
        <HighchartsExampleBar/>
        </Col>
      </Row>
      <HighchartsExamplePie/>
      <Container style={{ height: '50vh'}}>
      </Container>
      
      
      
      
    </>
  )
}

export default App
