import React,{Component} from 'react';
import './contents.scss';
import MovieThumb from '../MovieThumb/MovieThumb';
import FourColGrid from '../FourColGrid/FourColGrid';
import Spinner from '../Spinner/Spinner';
import {fetchMovies,fetchShows} from '../../movieservice'
import SearchBar from '../SearchBar/SearchBar'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import {API_URL,API_KEY,IMAGE_BASE_URL,POSTER_SIZE} from '../../../config';

class ContentLists extends Component{
    state ={
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        Shows:[],
        isTV: this.props.location.isTV
    }
    componentDidMount(){
        const movies=[];
                const searchTerm ='';
        this.setState({
            loading: true
        });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const tv_endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.state.isTV === true ? this.getShows(tv_endpoint) : this.getMovies(endpoint)

    }

    getMovies = async endpoint => {
        try {
            const result = await (await fetchMovies(endpoint))
            this.setState({
                movies: [...this.state.movies, ...result.results],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages,
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
                isTV:true,
                currentPage: result.page,
                totalPages: result.total_pages,
            })
          }
        catch(e){
            console.log('Error :',e)
        }
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
    loadMoreItems =()=>{
        let endpoint='';
        let showEnd= '';
        this.setState({
            loading: true
        })
        if(this.state.searchTerm === ''){
            endpoint=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
            showEnd =`${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        }
        else{
            endpoint=`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
            showEnd= `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.state.isTV === true ? this.getShows(showEnd) : this.getMovies(endpoint);
    }

    render(){
        return(
            <div className="list-home">
                <div className="container ">
                    <div>
                        <SearchBar callback={this.searchMovies} />
                    </div>
                    {this.state.isTV === false ?
                        <FourColGrid
                            header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
                            loading={this.state.loading} >
                            {this.state.movies.map((element, i) => {
                                return (
                                    <MovieThumb
                                        key={i}
                                        clickable={true}
                                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : '../images/no_image.jpg'}
                                        movieID={element.id}
                                        movieName={element.original_title}
                                        isTV={false}
                                    >
                                    </MovieThumb>
                                )
                            })}
                        </FourColGrid> :
                        <FourColGrid
                            header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
                            loading={this.state.loading} >
                            {this.state.Shows.map((element, i) => {
                                return (
                                    <MovieThumb
                                        key={i}
                                        clickable={true}
                                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : '../images/no_image.jpg'}
                                        showID={element.id}
                                        showName={element.original_name}
                                        isTV={true}>
                                    </MovieThumb>
                                )
                            })}
                        </FourColGrid>}
                    {this.state.loading ? <Spinner /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ? <LoadMoreBtn onClick={this.loadMoreItems} /> : null}


                </div>
            </div>
        )
    }
}
export default ContentLists;