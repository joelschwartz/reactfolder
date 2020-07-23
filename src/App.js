import React from 'react';
import './App.css';

class Numeral extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = {
			integer: '',
			numeral: '',
			output_one: '',
			output_two: ''
		}
		this.integertonumeral = this.integertonumeral.bind(this);
		this.numeraltointeger = this.numeraltointeger.bind(this);
		this.submitnumeral = this.submitnumeral.bind(this);
		this.submitform = this.submitform.bind(this);
		this.integerinput = this.integerinput.bind(this);
		this.romaninput = this.romaninput.bind(this);
	}
	
	

integertonumeral(integer)
{
let total = integer;
if (total < 1 || total > 3999)
{
	return "You did not enter a valid number";
}
let output = "";
const numerals = [ "M", "D", "C", "L", "X", "V", "I"];
const integers = [ 1000, 500, 100, 50, 10, 5, 1];
const subtract = ["CM", "CD", "XC","XL", "IX", "IV", ""];
let difference = [ 900, 400, 90, 40, 9, 4, 0];

for (let x = 0; x < integers.length;)
{
	if (total >= integers[x])
	{
		output += numerals[x];
		total -= integers[x];
		if (total < integers[x] && total < difference[x])
		{
			x += 1;
		}
	}
	else if (total >= difference[x] && total != 0)
	{
		output += subtract[x];
		total -= difference[x];
		if (total < difference[x] && total < integers[x])
		{
			x += 1;
		}
	}
	else
	{
		x += 1;
	}
	
}

return output;

}

numeraltointeger(numeral)
{
	let total = 0;
	for (let l = 1; l <= 3999; l++)
	{
		if (this.integertonumeral(l) == numeral)
		{
			total = l;
		}
	}
	if (total !== 0)
	{
		return total;
	}
	else
	{
		return "Not a valid roman numeral";
	}
}
romaninput(event)
{
	this.setState({
		numeral: event.target.value
	});
}
integerinput(event)
{
	this.setState({
		integer: parseFloat(event.target.value)
	});
}
submitnumeral()
{
let input = this.state.numeral;
input = input.toUpperCase();
let output = this.numeraltointeger(input);
this.setState({
	output_one: output
});


}

submitform()
{
var input = this.state.integer;
var result = this.integertonumeral(input);
var pattern = /[0-9]/g;
if (pattern.test(pattern) == false)
{
	this.setState({output_two: "You did not enter a number"});
}
this.setState({output_two: result});
}


	
	
render() {
		
    return (<div>
		<label>Please input a integer from 1 to 3999 to change into a roman numeral</label><br /><br />
		<input type="text" onChange={this.integerinput} /><br /><br />
		<input type="button" onClick={this.submitform} value="submit" /><br /><br />
		<p>{this.state.output_two}</p><br /><br />
		<label>Please input a roman numeral from 1 to 3999 to change into a integer</label><br /><br />
		<input type="text" onChange={this.romaninput} /><br /><br />
		<input type="button" onClick={this.submitnumeral} value="submit" /><br /><br />
		<p>{this.state.output_one}</p> 
	    </div>);
  }
}

export default Numeral;


