import React from "react";
import Footer from "../Footer/Footer";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const About = () => {
  return (
    <>
      <NavBar/>
      <div
        style={{
          backgroundColor: "grey",
          height: "150px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>The Generics</h1>
      </div>
      <Container className="text-center">
        <h3>About</h3>
        <p>
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            width={"300px"}
            height={"300px"}
            thumbnail
            roundedCircle
          />
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings. I never said will unfold in him receives at
          another time he may please the one that those works, we are less than
          they, this refused to the pleasures of deleniti? Those are! Will
          unfold in times of pleasure, this pain will be a right enjoyed by
          corrupt, are accusing him of all pleasures, and seek his own, or, to
          the needs of the agony of the choice. We hate the fellow. Lorem ipsum
          dolor, sit amet consectetur rebates. The distinction, that arise from
          or to. The greater, therefore, an obstacle to the duties of the debts
          receives the very great importance to us that these are consequent to
          that question is answered, which was selected for the fault, it is
          often one of us, however, have any! Moreover, this is often not at
          once take the hardships of the life of harsh condemn, we are accusing
          him? Him whom something large cisterns.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default About;
