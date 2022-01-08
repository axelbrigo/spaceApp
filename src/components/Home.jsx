import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="overlay">

            <article>
          <h4 className="text-2xl" >
            SO, YOU WANT TO TRAVEL TO <span className="span__space">SPACE</span>
          </h4>
          <p className="text__home">
            Let's face it; if you want to go to space, 
            <p>you might as well
            genuinely go to outer space and not hover</p>  kind of on the edge of it.
            Well, sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
          </article>

          <article className="main__buton--section">
              <button className="main__button">
                  <Link to="/destination">
                      Explore
                  </Link>
              </button>
          </article>
        </div>
      </section>
    </>
  );
}
