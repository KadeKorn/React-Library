import React from 'react'

const Featured = () => {
  return (
    <section id="features"> 
    {/* ideally this should be Featured or the component should have been named features, but the css is already witten */}
        <div className="containter">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
            </div>
        </div>
    </section>
    )
}

export default Featured