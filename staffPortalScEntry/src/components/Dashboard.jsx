import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { FaUsers, FaDollarSign, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 190, 300, 500, 200],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Analytics Overview" },
    },
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="mb-4">Arise Admin</h4>
        <Nav className="flex-column">
          <Nav.Link href="#" className="text-white">
            Dashboard
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Users
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Analytics
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Settings
          </Nav.Link>
        </Nav>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-3 bg-light">
        <Navbar bg="dark" variant="dark" className="mb-4 rounded">
          <Container fluid>
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link className="text-white">
                <FaBell />
              </Nav.Link>
              <Nav.Link className="text-white">
                <FaUserCircle />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container fluid>
          <Row className="g-3">
            <Col md={3}>
              <Card bg="primary" text="white" className="shadow">
                <Card.Body>
                  <Card.Title>Users</Card.Title>
                  <Card.Text className="fs-4">
                    <FaUsers /> 1,250
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card bg="success" text="white" className="shadow">
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text className="fs-4">
                    <FaDollarSign /> $9,540
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card bg="warning" text="white" className="shadow">
                <Card.Body>
                  <Card.Title>Orders</Card.Title>
                  <Card.Text className="fs-4">
                    <FaShoppingCart /> 350
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card bg="danger" text="white" className="shadow">
                <Card.Body>
                  <Card.Title>Alerts</Card.Title>
                  <Card.Text className="fs-4">
                    <FaBell /> 5
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mt-4 shadow">
            <Card.Body>
              <Card.Title>Analytics</Card.Title>
              <Line data={data} options={options} height={100} />
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
