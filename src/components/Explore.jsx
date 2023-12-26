import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div>
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore More! <span className="brown"> Books</span>
                    </h2>
                    <Link to="/books">
                        <button className="btn">Explore Books</button>
                    </Link>
                </div>
                <div className="ahmed"></div> 
            </div>
        </section>
    </div>
  )
}







export default Explore