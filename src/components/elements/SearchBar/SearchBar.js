import React,{Component} from 'react';
import './SearchBar.scss';
import FontAwesome from 'react-fontawesome';


class SearchBar extends Component{
    state={
        value:''
    }
    timeout = null;

    doSearch=(event)=>{
        this.setState({
            value: event.target.value
        })
        this.timeout =setTimeout(()=>{
            this.props.callback(this.state.value)
        },500)
    }
    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
                    <input type="text" className="rmdb-searchbar-input" placeholder="Search" value={this.state.value} onChange={this.doSearch}></input>
                </div>
            </div>
        )
    }
}

export default SearchBar;