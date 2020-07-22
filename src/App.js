import React, { Component } from 'react';
import './index.css';
let author = [];
let quote = [];

class Randomquote extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			q: '',
			a: ''
		}
		this.changeValue = this.changeValue.bind(this);
		
	}	 
	changeValue()
	{
	
		var random = Math.floor(Math.random()*author.length);
		var auth = author[random];
		var quot = quote[random];
		this.setState({
			q: quot,
			a: auth
		})
		
	}
	componentDidMount()
	{
		fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		.then(data => data.json())
		.then(jsondata => {
		jsondata.quotes.forEach(d => { 
		quote.push(d.quote);
		author.push(d.author)
		});
		this.changeValue();
		});
		
	}
  render() {
	var input = this.state.q + " " + this.state.a;
	var url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + input;
    return (<div id="quote-box">
	<blockquote class="quote-card">
	<p>{this.state.q}</p><br /><br />
	<cite>{this.state.a}</cite><br /><br />
	<button onClick={this.changeValue} id="new-quote">newquote</button><br /><br />
	<a href={url} target="_blank" id="tweet-quote">tweet</a>
	</blockquote>
	</div>);
	
  }
}

export default Randomquote;
