import React from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Footer from '../elements/Footer/footer';
import Movie from '../Movie/Movie';
import ContentLists from '../elements/ContentList/ContentLists';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
const App=() =>{
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header />
                {/* <Route render={({location}) => ( */}
                    {/* <TransitionGroup>
                        <CSSTransition key={location.key} timeout={3000} classNames="wow fadeInLeft"> */}
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/movie/:movieId" component={Movie} exact />
                                <Route path="/tvshow/:showID" isTv="true" component={Movie} exact />
                                <Route path="/movies" component={ContentLists} exact />
                                <Route path="/tv" component={ContentLists} exact />
                                <Route path="*" component={NotFound} /> 
                            </Switch>
                        {/* </CSSTransition>
                    </TransitionGroup>
                )}/>       */}
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;