import React from 'react';
import SingleResult from "./SingleResult";
import './SearchResults.css'

const axios = require('axios');

class SearchResults extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
      results: [],
      loading: false
		}
    }

    componentDidMount() {
      this.handleSearch();
    }

	async handleSearch() {
    this.setState({
			loading: true
		});
        
    let results = await this.SearchWeb();
		this.setState({
			results: results,
      loading: false
		});
  
	}

  async SearchWeb() {
    const url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDeegLkDJQHv1PNCv_JrHxyw_jC6RZyORI&cx=b93dfdb322cd6be8f&q="+this.state.value;
		
		let res = await this.fetchData(url);  
    if(!res.data){
			console.log("Invalid data Obj");
			return;
		}
	
    const items = res.data.items;
    let results;
    if (items) {
      results = []
      for (var i=0; i<items.length; i++) {
        let temp = SingleResult(items[i]);
			  results.push(temp);
		  }
    }

    return results;
  }

	async fetchData(url) {
		console.log("Crawling data...")

		let response = await axios.get(url).catch((err) => console.log(err));

		if(response.status !== 200){
			console.log("Error occurred while fetching data");
			return;
		}
		return response;
	}

    render() {
      return (
        <div className="search_results_box">
          {this.state.loading ? "Loading.." : null}
          {this.state.results ? this.state.results : 
            <div className="search_no_results">
              No Results
            </div>
          }
        </div>
      );
    }
}

export default SearchResults;