import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items_center">
                    <Col xs={12} md={6} xl={7}>
                        <span class className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis diam lacus. Maecenas porta metus quis rhoncus malesuada. Curabitur massa arcu, rhoncus et vestibulum vitae, posuere id leo. Nullam non porta enim, in egestas dui. Pellentesque ut scelerisque elit. Mauris aliquam diam vel congue lacinia. Cras mattis volutpat sollicitudin. Sed eleifend posuere ipsum ac eleifend. Quisque eu mi turpis. Praesent ultrices vestibulum pulvinar. Pellentesque commodo felis ipsum, et bibendum augue ultricies at. Nunc eu diam ante. Phasellus viverra sed quam fermentum aliquet.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}