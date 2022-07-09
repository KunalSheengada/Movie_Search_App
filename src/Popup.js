import React from 'react'

const Popup = ({ Selected, closePopup })=>{
	console.log(Selected, closePopup)
	return (
		<section className="popup">
			<div className="content">
				<h2> { Selected.Title } <span>({ Selected.Year })</span></h2>
				<p className="rating">Rating: {Selected.imdbRating}</p>
				<div className="plot">
					<img src={Selected.Poster} alt={Selected.Title}/>
					<p>
                        {Selected.Plot}
                        <div id="blank"></div>
                        <h4>Genres:-</h4><div>{Selected.Genre}</div>
                        <h4>Actors:-</h4><div>{Selected.Actors}</div>
                        <h4>Director:-</h4><div>{Selected.Director}</div>

                    </p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup