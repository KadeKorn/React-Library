import React from 'react'
import { books } from '../data'
import Book from "./ui/book"

const Discounted = () => {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Discounted <span className="purple">Books</span>
                </h2>
            </div>
            <div className="books">
                {books.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Discounted