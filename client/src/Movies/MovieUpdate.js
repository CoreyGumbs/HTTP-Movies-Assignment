import React, { Component } from 'react';
import axios from 'axios';

class MovieUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            director: '',
            metascore: '',
            stars: []
        }
    }

    componentDidMount(){
       this.getData();
    }

    async getData(){
        axios.get(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                id: res.data.id,
                title: res.data.title,
                director: res.data.director,
                metascore: res.data.metascore,
                stars: res.data.stars

            })
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    handleChanges =  e => {
       this.setState({
           ...this.state,
           [e.target.name]: e.target.value
       });
    }


    handleSubmit = e => {
        e.preventDefault();
        const {id, title, director, metascore, stars} = this.state;
        
        let starsArray;

        if(!Array.isArray(stars)){
            starsArray = stars.split(',');
        }else{
            starsArray = stars
        };
        
        const body = {
            id: id,
            title: title,
            director: director,
            metascore: metascore,
            stars: starsArray 
        }

        this.updateMovie(body);
    }

    updateMovie = movie => {
        console.log(movie, `http://localhost:5000/api/movies/${this.props.match.params.id}`);

        axios.put(`http://localhost:5000/api/movies/${this.props.match.params.id}`, movie)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        this.props.history.push(`/`);
    }

    render(){
        const {title, director, metascore, stars} =  this.state;

        return(
            <div className="update-container">
                <h1>Update Movie</h1>
                <form className="movie-update-form" onSubmit={this.handleSubmit}>
                    <div className="movie-update-input-container">
                        <label htmlFor="title" className="movie-update-label">
                            Title:
                        </label>
                        <input type="text" className="movie-update-input" name="title" value={ title} onChange={this.handleChanges} required/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label" >
                            Director:
                        </label>
                        <input type="text" className="movie-update-input"  name="director" value={director} onChange={this.handleChanges} required/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Metascore: 
                        </label>
                            <input type="number" className="movie-update-input" name="metascore" value={ metascore} onChange={this.handleChanges} required/>
                        </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Actors: 
                        </label>
                        <input type="text" className="movie-update-input" name="stars" value={stars} onChange={this.handleChanges} required/>
                    </div>
                    <div className="movie-update-btn">
                        <button type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MovieUpdate;