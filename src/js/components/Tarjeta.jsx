import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Tarjeta({ title, description, source, link }) {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" href={link}>
          Ver documentación
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
