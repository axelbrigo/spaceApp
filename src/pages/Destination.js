import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
    const [planets] = useState(data.destinations)
    const [value, setValue] = useState(0)

    const { name, images, description, distance, travel } = planets[value]

    return (
        <>
            <section className="home destinations">
                <div className="destinations-flex">

                    <article className="destination_planets">
                       
                            <h2>
                                01
                                <span className="c">   Pick your destination</span>
                            </h2>
                        

                    <div className="nav__header">
                           <img
                            src={images.png}
                            alt={name}
                            title={name}/>

                    </div>
                 
                    </article>

                    <article className="second__article">
                        <ul className="buttons__planets">
                            {planets.map((item, index) => (
                                <li key={index} className="f">
                                    <button
                                        onClick={() => setValue(index)}>
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <h2 className="tittle_planets">
                            {name}
                        </h2>

                        <p className="text_planets">
                            {description}
                        </p>

                        <ul className="list_planets">
                            <li className="avg__distance">
                                Avg. Distance<span className="l">{distance}</span>
                            </li>
                            <li className="est__distance">
                                Est. travel time<span className="n">{travel}</span>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}

