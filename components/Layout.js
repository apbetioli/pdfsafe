import { Container } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="fullHeight">
        {props.children}
      </Container>
      <Footer />
    </>
  );
}
