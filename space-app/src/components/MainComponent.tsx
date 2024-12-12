import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const MainComponent = () => {
  const [article, setArticle] = useState<IComponent[]>([]);
  const URL_LINK = "https://api.spaceflightnewsapi.net/v4/articles";
  fetch(URL_LINK)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NELLA FETCH");
      }
    })
    .then((article) => {
      console.log(article);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    MainComponent();
  }, []);

  return (
    <div>
      <Container>
        <Row className=" justify-content-center">
          <Col xs={12} md={6}>
            {}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
