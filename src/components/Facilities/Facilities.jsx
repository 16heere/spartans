import React from "react";
import "./Facilities.css";
import Hero from "../Hero/Hero";

const Facilities = () => {
    return (
        <div className="facilities-container">
            <Hero title="Facilities" />

            <div className="sportshall">
                <img src="/assets/player-image.png" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    enim dolor veniam asperiores! Modi, ullam labore aliquam
                    architecto veniam ducimus veritatis nihil saepe harum odio
                    hic facilis aspernatur. Laudantium animi fugiat dolore!
                    Delectus accusantium odit inventore soluta sequi! Soluta,
                    doloribus porro ab quasi officiis unde aut voluptatum.
                    Aspernatur, hic cum.
                </p>
            </div>
            <div className="gym">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti officia sed sequi aut eveniet magni dolorum optio
                    nesciunt eligendi sunt modi quas, nemo explicabo at nam ipsa
                    veniam ex sit assumenda maiores distinctio tempore
                    inventore? Libero error corporis natus. Sequi recusandae,
                    sint corporis voluptatibus tempore perferendis quis
                    dignissimos pariatur at?
                </p>
                <img src="/assets/player-image.png" alt="" />
            </div>
        </div>
    );
};

export default Facilities;
