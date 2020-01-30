import React from 'react';


const MovieUpdate = () => {
    return(
        <div className="movie-update-container">
            <form className="movie-update-form">
                <div className="movie-update-input-container">
                    <label htmlFor="" className="movie-update-label"></label>
                    <input type="text" className="movie-update-input"/>
                </div>
                <div className="movie-update-input-container">
                    <label htmlFor="" className="movie-update-label"></label>
                    <input type="text" className="movie-update-input"/>
                </div>
                <div className="movie-update-input-container">
                    <label htmlFor="" className="movie-update-label">
                        </label>
                        <input type="text" className="movie-update-input"/>
                    </div>
                <div className="movie-update-input-container">
                    <label htmlFor="" className="movie-update-label"></label>
                    <input type="text" className="movie-update-input"/>
                </div>
            </form>
        </div>
    )
}

export default MovieUpdate;