import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {
  Card, CardBody, CardTitle, CardTitleWrap, CardSubhead,
} from '@/shared/components/Card';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// Sample KPI Data
const kpiData = {
  sessions: 17148,
  activeUsers: 1472,
  newUsers: 568,
  pageViews: 21534,
  gaugeValue: 345, // Current Users
  gaugeMax: 500,
};

// Line Chart Data (Active Users Trend)
const lineChartData = {
  labels: Array.from({ length: 50 }, (_, i) => `Day ${i + 1}`),
  datasets: [
    {
      label: 'Active Users',
      data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 5000)),
      borderColor: '#17a2b8',
      backgroundColor: 'rgba(23, 162, 184, 0.2)',
      fill: true,
      tension: 0.3,
    },
  ],
};

// Doughnut Chart Data (Current Users)
const gaugeChartData = {
  labels: ['Usage'],
  datasets: [
    {
      data: [kpiData.gaugeValue, kpiData.gaugeMax - kpiData.gaugeValue],
      backgroundColor: ['#28a745', '#e0e0e0'],
      borderWidth: 0,
    },
  ],
};

// Bar Chart Data (App Tile Clicks)
const appTileClicksData = {
  labels: ['News', 'Video', 'Messages', 'Photos', 'Weather'],
  datasets: [
    {
      label: 'Clicks',
      data: [40, 20, 100, 50, 60],
      backgroundColor: '#007bff',
    },
  ],
};

// Doughnut Chart Data (Weekly Stats)
const weeklyStatsData = {
  labels: ['Satisfied', 'Negative Feedback'],
  datasets: [
    {
      data: [78, 25],
      backgroundColor: ['#28a745', '#dc3545'],
    },
  ],
};

// Bar Chart Data (Social Marketing)
const socialMarketingData = {
  labels: ['Twitter', 'Facebook', 'VK', 'Instagram', 'LinkedIn'],
  datasets: [
    {
      label: 'Engagement',
      data: [67, 62, 60, 81, 85],
      backgroundColor: '#007bff',
    },
  ],
};

// Main Dashboard Component
const Dashboard = () => (
  <Container fluid>
    <h2 className="text-dark mb-4"> Dashboard</h2>

    {/* First Row: Current Users (Doughnut) & Active Users (Line) */}
    <Row>
      {/* Current Users (Doughnut Chart) */}
      <Col md={6} lg={4}>
        <Card>
          <CardBody className="text-center">
            <CardTitleWrap>
              <CardTitle>Current Users</CardTitle>
              <CardSubhead>Last 10 minutes</CardSubhead>
            </CardTitleWrap>
            <Doughnut data={gaugeChartData} options={{ cutout: '80%' }} />
            <h2>{kpiData.gaugeValue}</h2>
            <p>7d min: 0 | 7d max: {kpiData.gaugeMax}</p>
          </CardBody>
        </Card>
      </Col>

      {/* Active Users (Line Chart) */}
      <Col md={6} lg={8}>
        <Card>
          <CardBody>
            <CardTitleWrap>
              <CardTitle>Active Users</CardTitle>
              <CardSubhead>See how users interact with the app</CardSubhead>
            </CardTitleWrap>
            <Line data={lineChartData} options={{ responsive: true }} />
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Second Row: KPI Cards */}
    <Row>
      <Col md={3}>
        <Card>
          <CardBody className="text-center">
            <h3 className="text-danger">{kpiData.sessions}</h3>
            <p>Sessions</p>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: '87%' }} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col md={3}>
        <Card>
          <CardBody className="text-center">
            <h3 className="text-success">{kpiData.activeUsers}</h3>
            <p>Active Users</p>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: '32%' }} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col md={3}>
        <Card>
          <CardBody className="text-center">
            <h3 className="text-primary">{kpiData.newUsers}</h3>
            <p>New Users</p>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: '79%' }} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col md={3}>
        <Card>
          <CardBody className="text-center">
            <h3 className="text-info">{kpiData.pageViews}</h3>
            <p>Pageviews</p>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: '45%' }} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Third Row: Additional Graphs */}
    <Row>
      {/* App Tile Clicks (Bar Chart) */}
      <Col md={6} lg={4}>
        <Card>
          <CardBody>
            <CardTitle>App Tile Clicks</CardTitle>
            <CardSubhead>Comparison with previous month</CardSubhead>
            <Bar data={appTileClicksData} options={{ indexAxis: 'y' }} />
          </CardBody>
        </Card>
      </Col>

      {/* Weekly Stats (Doughnut Charts) */}
      <Col md={6} lg={4}>
        <Card>
          <CardBody className="text-center">
            <CardTitle>Weekly Stats</CardTitle>
            <CardSubhead>Top customer feedback</CardSubhead>
            <Doughnut data={weeklyStatsData} options={{ cutout: '70%' }} />
          </CardBody>
        </Card>
      </Col>

      {/* Social Marketing (Bar Chart) */}
      <Col md={6} lg={4}>
        <Card>
          <CardBody>
            <CardTitle>Social Marketing</CardTitle>
            <CardSubhead>Engagement from social media</CardSubhead>
            <Bar data={socialMarketingData} options={{ indexAxis: 'y' }} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
