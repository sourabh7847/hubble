import { ThemeProvider } from "styled-components";
import Header from "./componets/Header";
import Card from "./componets/Card";
import Footer from "./componets/Footer";
import { Container } from "./componets/styles/Container.styled";
import GlobalStyles from "./componets/styles/Global";
import content from "./content";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },

    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index)=>(
            <Card key ={index} item= {item} />
          ))}
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
