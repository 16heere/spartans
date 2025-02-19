import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const paragraphRef = useRef(null);

    return (
        <div className="Home">
            <div className="hero-section">
                <img
                    src="/assets/hero-img.jpg"
                    alt="Hero"
                    className="hero-img"
                />
                <h1 className="hero-title">Gravesend Spartans</h1>
            </div>
            <div className="arrow-div">
                <FaArrowDown
                    className="scroll-icon"
                    onClick={() =>
                        paragraphRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        })
                    }
                />
            </div>

            <div className="this-is-spartans" ref={paragraphRef}>
                <h2>This is Spartans Basketball</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur iure, expedita illum harum totam mollitia
                    magnam, repellat quis, ipsum et velit veritatis ipsam minima
                    reiciendis beatae odio! Amet sunt eveniet dignissimos non,
                    consequatur eum voluptatum consectetur et blanditiis cum,
                    fuga quo omnis eligendi aliquid cupiditate porro, ea
                    tempora! Ipsam veniam veritatis quod ullam mollitia aut
                    maxime est esse, ipsa reprehenderit, quos, necessitatibus
                    aspernatur atque officia minus totam distinctio voluptate.
                    Nesciunt facilis autem error. Incidunt, dolores?
                    Perspiciatis, aut recusandae vero asperiores provident
                    officia minus molestias voluptates nobis natus dolore maxime
                    optio unde debitis consectetur sapiente veritatis tenetur et
                    dicta distinctio fuga labore. Temporibus amet consequuntur
                    iusto recusandae, placeat dolorem aliquid quasi aperiam modi
                    molestias assumenda culpa similique libero voluptate nihil
                    dolor saepe non atque eligendi. Recusandae consequuntur
                    omnis tempora minus nostrum quas iste repellat asperiores
                    labore aut maxime animi voluptatum, officiis cum magnam quis
                    quos blanditiis cupiditate ipsam tempore saepe ea at odit!
                    Odio aut, cum ut cumque rem quibusdam tempore! Sunt pariatur
                    fugit sint minus nam consequuntur laboriosam velit est,
                    porro doloremque temporibus qui eos aliquam laborum
                    reprehenderit. Magnam voluptas eos recusandae perspiciatis
                    voluptate ad, aperiam soluta fugiat, obcaecati eum
                    voluptatibus quisquam, explicabo reiciendis neque! Pariatur,
                    modi vitae, veniam, repellat harum accusamus eos libero
                    nihil dolorum adipisci culpa repellendus minima eum fuga
                    molestias consequatur necessitatibus maiores fugiat hic
                    nobis. Ea rem dicta ratione eveniet quam eligendi
                    consequatur esse? Accusantium magni eos ullam possimus
                    voluptatem magnam voluptate temporibus, perspiciatis fugit
                    quaerat vero voluptates enim sit ab tempora praesentium
                    error beatae repudiandae blanditiis at veniam! Dolorum magni
                    mollitia autem, corporis praesentium recusandae quos ipsam,
                    fugiat impedit expedita nam, dolor laboriosam minus!
                    Expedita, sunt. Qui natus porro illum corrupti, aperiam
                    dignissimos accusantium hic animi! Quae enim autem corporis
                    aspernatur veritatis praesentium iure harum libero omnis
                    dolor a aut esse fugiat, minima ex non.
                </p>
            </div>
        </div>
    );
};

export default Home;
