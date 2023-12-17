import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Question from "./components/Question";
import data from "./helper/data";

function App() {
  const cards = data.map((item) => {
    // props a data yı gönderiyoruz, parent tan child a
    return <Question key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <Container className="">
        <div>{cards}</div>
      </Container>
    </div>
  );
}

export default App;
