import { Header } from "../../component/header/header";

import { Container } from '@mui/material'

import "./main.scss"

function Main() {
    return (
        <>
            <div className="main-page-hello">
                <Container maxWidth={false} disableGutters={true} className="main-page-hello__wrapper">
                    <Header />
                    <div className="hello">
                        <h1 className="title">Everything You Love About Coffee</h1>
                        <div className="beans-logo"></div>
                        <div className="subtitle">
                            <h2>We makes every day full of energy and taste</h2>
                            <h2>Want to try our beans?</h2>
                        </div>
                        <button className="btn"><span>More</span></button>
                    </div>
                    <div className="about"></div>
                </Container>
            </div>
            <div className="main-page-about">
                <Container maxWidth={false} disableGutters={true} className="main-page-about__wrapper">
                    
                </Container>
            </div>
        </>
    );
}

export default Main;