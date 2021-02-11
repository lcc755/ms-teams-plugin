import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";


class MainForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			valid: true
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
		this.setState({value: e.target.value, valid: (this.getValidationState() === 'success')})
	}

	getValidationState() {
		if (this.state.value.length <= 0) return null
		//TODO use a lib to validate input as url
	    return (this.state.value.match(/((http|https):\/\/www\.)?.+\..+/) ) ? 'success' : 'error';
  	}

  	handleSubmit(e) {
  		e.preventDefault();
  		console.log(this.state.value);
  	}

	render() {
		return (
			// <div className="MainForm">
			// 	<div className="Instructions">
			// 		<h2><Form.Label>Input the website you'd like to crawl</Form.Label></h2>
			// 	</div>
			// 	<div className="Input">
			// 		<form onSubmit={this.handleSubmit}>
			// 			<FormGroup bsSize="large" validationState={this.getValidationState()}>
			// 				<FormControl 
			// 					type="text"
			// 					value={this.state.value}
			// 					placeholder="e.g. google.com"
			// 					onChange={this.handleChange} />
			// 				<FormControl.Feedback />
								
			// 			</FormGroup>
			// 			<Button bsSize="large" bsStyle="primary" type="submit" onClick={this.handleSubmit} disabled={!this.state.valid}>
			// 				Crawl!
			// 			</Button>
			// 		</form>
			// 	</div>
            // </div>
            
            <div class="login-box">
                <h1>Creatros Crawler</h1>
                <div class="textbox">
                    <input type="text" placeholder="Type tutorial to crawl"name=""  validationState={this.getValidationState()} />
                </div>
                <input class="btn" type="button" name="" value="Crawl" onClick={this.handleSubmit} disabled={!this.state.valid}/>
        </div>
            )
	}
}

export default MainForm;