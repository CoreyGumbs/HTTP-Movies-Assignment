import React, { Component } from 'react';
import axios from 'axios';

class MovieUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie : '',
            title: '',
            director: '',
            metascore: '',
            stars: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                ...this.state,
                movie: res.data
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

        const {title, director, metascore, stars} = this.state;

        const starsArray = stars.split(',')
        
        const body = {
            title: title,
            director: director,
            metascore: metascore,
            stars: starsArray
        }

        this.updateMovie(body);
    }

    updateMovie = movie => {
        axios.put(`http://localhost:5000/api/movies/${this.props.match.params.id}`, movie)
        .then(res =>{
            console.log(res);
        })
        .catch(err => console.log(err));

        this.props.history.push('/movies');
    }

    render(){
        console.log(this.props);
        const {title, director, metascore, stars} =  this.state;

        return(
            <div className="movie-card">
                <form className="movie-update-form" onSubmit={this.handleSubmit}>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Title:
                        </label>
                        <input type="text" className="movie-update-input" name="title" value={ title} onChange={this.handleChanges}/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label" >
                            Director:
                        </label>
                        <input type="text" className="movie-update-input"  name="director" value={director} onChange={this.handleChanges}/>
                    </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Metascore: 
                        </label>
                            <input type="number" className="movie-update-input" name="metascore" value={ metascore} onChange={this.handleChanges}/>
                        </div>
                    <div className="movie-update-input-container">
                        <label htmlFor="" className="movie-update-label">
                            Actors: 
                        </label>
                        <input type="text" className="movie-update-input" name="stars" value={stars} onChange={this.handleChanges}/>
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