import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Encabezado() {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <Card>
      <Card.Header>Atención</Card.Header>
      <Card.Body>
        <Card.Title>Hasta ahora solo hemos aprendido sobre Frontend</Card.Title>
        <Card.Text>
          Esto es un ejemplo de como combinar React con Bootstrap. Nos permite
          crear layouts de manera muy rapida reutilizando el uso de componentes.
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Ver progreso
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Encabezado;
