import React from 'react';
import './MainForm.css'
import * as microsoftTeams from "@microsoft/teams-js";
import SearchResults from "./SearchResults";

class MainForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			TypedValues:"",
			searching: false,
			valid: true, 
			results: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }
  
	handleChange(e) {
		this.setState({
			TypedValues: e.target.value
		})
	}

	getValidationState() {
		if (this.state.value.length <= 0) return null
		//TODO use a lib to validate input as url
	    return (this.state.value.match(/((http|https):\/\/www\.)?.+\..+/) ) ? 'success' : 'error';
  	}

	searchForTutorials = async (e) => {
		if (e.key == "Enter") {
			this.handleSearch();
		}
	}

  	handleSubmit(e) {
		/*e.preventDefault()*/
		this.handleSearch();
  	}

	handleSearch = async () => {
		if (this.state.TypedValues) {
			this.setState({
				searching: true,
				searchedValue: this.state.TypedValues
			});
		}
	}


	render() {
		return (      
			<div className="main_form">
				<div className="search_box">
					<h1>Creatros Crawler</h1>
					<div class="search_box_input">
						<input 
							type="text"
							placeholder="Type tutorial to crawl"
							validationState={this.getValidationState()} 
							onKeyUp={this.searchForTutorials}
							onChange={this.handleChange}
						/>
					</div>
					<input 
						className="search_button" 
						type="button"
						value="Crawl" 
						onClick={this.handleSubmit} 
						disabled={!this.state.valid}/>
				</div>


				{ this.state.searching ? 
  				<div className="search_results">
					<SearchResults value = {this.state.searchedValue}/>
    			</div>
    			: null }
			</div>
            )
	}
}

export default MainForm;