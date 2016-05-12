import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: ''};
		//this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		this.setState({term:event.target.value});
		
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render(){
		return(
			 <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
			   <input 
			    placeholder="Get a five-day forecast"
			    className="form-control"
			    value={this.state.term}
			    onChange={(event) => this.onInputChange(event)} />
			    <span className="input-group-btn">
			      <button type="submit" className="btn btn-secondary">Submit</button>
			   </span>
			</form>
			)
	}
}

function mapStateToProps(state){
	return{
		results:state.results

	};

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}


export default connect(null,mapDispatchToProps)(SearchBar);





