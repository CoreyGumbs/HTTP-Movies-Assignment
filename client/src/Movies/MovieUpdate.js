import React, { Component } from 'react';


class MovieUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            director: '',
            metascore: 0,
            stars: []
        }
    }

    handleChanges =  e => {
        console.log(e.target.name)
    }

    render(){
        
        const {title, director, metascore, stars} =  this.state;

        return(
            <div className="movie-card">
                <form className="movie-update-form">
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Title:
                        </label>
                        <input type="text" className="movie-update-input" name="title " value={title}/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label" >
                            Director:
                        </label>
                        <input type="text" className="movie-update-input"  name="director" value={director}/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Metascore: 
                        </label>
                            <input type="number" className="movie-update-input" name="metascore" value={metascore}/>
                        </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Actors: 
                        </label>
                        <input type="text" className="movie-update-input" name="stars" value={stars} />
                    </div>
                </form>
            </div>
        );
    }
}

export default MovieUpdate;