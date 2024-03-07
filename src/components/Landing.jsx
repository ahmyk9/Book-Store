import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id='landing'>
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>
                        Best Book Store in the World!
                    </h1>
                    <h2>
                        Find your dream book!
                    </h2>
                    <Link to="/books">
                        <button className="btn">
                            Browse Books
                        </button>
                    </Link>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </div>
        </header>
    </section>
  )
}


export default Landing
