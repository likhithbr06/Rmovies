import React,{Component} from 'react';
import {API_URL,API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar';
import {fetchMovies,fetchShows} from '../movieservice'
import MovieCarousel from '../elements/MovieCarousel/MovieCarousel'
import './Home.scss';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';



class Home extends Component{
    _isMounted = false;     
    state ={
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        Shows:[],
        isTV: false
    }
    componentDidMount(){
        const WOW = require('wow.js')
      new WOW().init();
        const movies=[];
        const currentPage = 0;
        const totalPages =0;
        const searchTerm ='';
        const heroImage=null;
        this._isMounted=true;
        this.setState({
            loading: true
        }); 
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const tv_endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.getMovies(endpoint);
        this.getShows(tv_endpoint);
    }

    componentWillUnmount(){
        this._isMounted= false;
    }

    searchMovies=(searchTerm)=>{
        let endpoint,tv_endpoint;
        this.setState({
            movies:[],
            loading:true,
            searchTerm : searchTerm,
            Shows:[]
        })
        if(searchTerm === '')
        {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            tv_endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }
        else{
            endpoint= `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
            tv_endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.getMovies(endpoint)
        this.getShows(tv_endpoint);
    }

    getMovies = async endpoint => {
        try {
            const result = await (await fetchMovies(endpoint))
            this.movies = result.results;
            this.heroImage = result.results[0];
            this.totalPages = result.total_pages;
            this.currentPage = result.page;
            this.setState({
                movies: result.results
            })
        }
        catch (e) {
            console.log('Error :', e)
        }

    }

    getShows= async tv_endpoint =>{
        try{
            const result = await (await fetchShows(tv_endpoint) );

            this.setState({
                Shows: [...this.state.Shows, ...result.results],
                loading: false,
                isTV:true
            })
          }
        catch(e){
            console.log('Error :',e)
        }
    }

    render(){
        return(
            <div className="rmdb-home">
                {this.heroImage ?
                <div>
                        {window.innerWidth < 480 ?
                            <HeroImage
                                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.heroImage.poster_path}`}
                                title={this.heroImage.original_title}
                                text={this.heroImage.overview} /> :
                            <HeroImage
                                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.heroImage.backdrop_path}`}
                                title={this.heroImage.original_title}
                                text={this.heroImage.overview} />
                        }
                    
                    <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                        <SearchBar callback={this.searchMovies}/>   
                    </ScrollAnimation>
                </div>  : null}
                <div>
                    <div className="tab-content">
                        <div id="movies" className="tab-pane col-md-10 active in">                       
                                <MovieCarousel movies={this.state.movies} type="movie"/>
                                <MovieCarousel movies={this.state.Shows} type="tv"/>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Home;