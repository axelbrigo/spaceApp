import { useState } from "react"
import data from "../starter-code/data.json"
import {BsPersonCircle} from "react-icons/bs"

export default function Crew() {
    const [people] = useState(data.crew)
    const [value, setValue] = useState(0)

    const { name, images, role, bio } = people[value]

    return (
        <>
            <section className="crew__background">
                <div className="destinations-flex">

                    <article className="destination_planets">
                       
                            <h2>
                               02
                                <span className="c">   Meet your Crew</span>
                            </h2>
                        

                    <div className="nav__header">
                           <img
                            src={images.png}
                            alt={name}
                            title={name}/>

                    </div>
                 
                    </article>

                    <article className="second__article">
                     <h4 className="role__styles">{role}</h4>

                        <h2 className="tittle_planets">
                            {name}
                        </h2>

                        <p className="text_planets">
                            {bio}
                        </p>

                        <ul className="buttons__planets">
                            {people.map((item, index) => (
                                <li key={index} className="f">
                                    <button
                                        onClick={() => setValue(index)}>
                                        <BsPersonCircle/>
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </article>
                </div>
            </section>
        </>
    )
}

