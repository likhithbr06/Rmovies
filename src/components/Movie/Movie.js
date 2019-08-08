import React, { Component } from 'react';
import {API_URL,API_KEY} from '../../config';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import Spinner from '../elements/Spinner/Spinner';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import './Movie.scss';

class Movie extends Component{
    _isMounted = false;
    state={
        movie:null,
        loading: false,
        directors:[],
        actors:[],
        name: '',
        isTV: this.props.location.isTV
       
    }
    
    componentDidMount(){
        this._isMounted = true;
        const WOW = require('wow.js')
        new WOW().init();
        this.setState({
            loading:true,
            isTV : this.props.location.isTV
        })
        
    //     if(this.props.location.isTv){
             const Showendpoint = `${API_URL}tv/${this.props.match.params.showID}?api_key=${API_KEY}&language=en-US`;
    //         this.showDetails(Showendpoint);
    //    }
    //    else{
    //        console.log(this.props.match.params.movieId)
             const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    //         this.fetchItems(endpoint);
    //     }
       this.state.isTV == true ? this.showDetails(Showendpoint) : this.fetchItems(endpoint)
    }

    showDetails= async Showendpoint =>{

        const showId =this.props.match.params.showID;
        try{
            const showResult= await (await fetch(Showendpoint)).json();
           
            if(showResult.status_code){
                this.setState({
                    loading: false
                })
            }
            else
            {
                this.setState({movie: showResult})
                const showCredits = `${API_URL}tv/${showId}/credits?api_key=${API_KEY}&language=en-US`;
                const creditsRes= await (await fetch(showCredits)).json();
                // const directors = creditsRes.crew.filter((member) =>{
                //     return member.job === "Director";
                // });
                const directors = showResult.created_by;
                this.setState({
                    actors: creditsRes.cast,
                    directors: directors,
                    loading: false,
                    name: this.props.location.showname
                })
            }
        }
        catch(e){
            console.log('ERROR:',e)
        }
    }

    fetchItems= async endpoint => {
        
        const {movieId} =this.props.match.params;
        try{
            const result = await (await fetch(endpoint)).json();
            if(result.status_code){
                this.setState({
                    loading: false
                })
            }
            else{
                this.setState({ movie: result })
                const CreditsUrl = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
                const creditsResult = await (await fetch(CreditsUrl)).json();
                const directors = creditsResult.crew.filter((member) => {
                    return  member.job === "Director";
                });
                this.setState({
                    actors : creditsResult.cast,
                    directors: directors,
                    loading: false,
                    name: this.props.location.moviename
                })
            }
        }
        catch(e){
            console.log('ERROR!',e);
        }
    }
    componentWillUnmount(){
        this._isMounted= false;
    }

    render(){
        return(
            <div className="rmdb-movie wow fadeInLeft">
            {this.state.movie ? 
            
                <div>
                    <Navigation movie={this.state.name}/>
                    <MovieInfo isTV={this.state.isTV} movie={this.state.movie} directors={this.state.directors}/>
                    { this.state.isTV == true? 
                    <MovieInfoBar isTV={this.state.isTV} seasons={this.state.movie.number_of_seasons} episodes={this.state.movie.number_of_episodes}runtime={this.state.movie.episode_run_time}/>
                    : <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue}/> }
               </div>
               : null }
               {this.state.actors ?
                <div className="rmdb-movie-grid">
                    <FourColGrid  header={'Cast'}>
                        {this.state.actors.map((element,i)=>{
                            return <Actor key={i} actor={element}/>
                        })}                
                    </FourColGrid>
                </div>
                :null}
                {/* {this.state.actors && this.state.loading ? <h1>No Movie Found...</h1> : null} */}
                {this.state.loading ? <Spinner/> : null}
            </div>
        )
    }
}

export default Movie;