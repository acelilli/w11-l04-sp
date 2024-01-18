import { useEffect, useState } from "react";
import { Infos } from "../typefiles/infos";
import SpaceCard from "./SingleCard";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
  const [news, setNews] = useState<Infos[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore recupero dati");
        }
      })
      .then((data) => {
        console.log(data, "controllo dati");
        setNews(data.results);
      })
      .catch((error) => {
        console.log("errore", error);
      });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {news.map((card) => (
          <SpaceCard key={card.id} Infos={card} />
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
