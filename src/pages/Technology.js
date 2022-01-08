import { useState } from "react"
import data from "../starter-code/data.json"
import {BsArrowRightCircle} from "react-icons/bs"

export default function Technology() {
    const [cards] = useState(data.technology)
    const [value, setValue] = useState(0)

    const { name, images, description } = cards[value]

    return (
        <>
            <section className="technology__background">
                <div className="destinations-flex">

               

                    <article className="second__article">
                     

                        <h2 className="tittle_planets">
                            {name}
                        </h2>

                        <p className="text_planets">
                            {description}
                        </p>

                        <ul className="buttons__planets">
                            {cards.map((item, index) => (
                                <li key={index} className="f">
                                    <button
                                        onClick={() => setValue(index)}>
                                        <BsArrowRightCircle/>
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </article>

                    <article className="technology__tittle">
                       
                       <h2>
                          03 
                           <span className="c">   SPACE LAUNCH 101</span>
                       </h2>
                   

               <div className="picture__technology">
                      <img
                       src={images.portrait}
                       alt={name}
                       title={name}/>

               </div>
            
               </article>
                </div>
            </section>
        </>
    )
}

