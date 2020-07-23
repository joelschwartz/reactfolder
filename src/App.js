import React from 'react';
import './App.css';
/* eslint-disable */

class Numeral extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = {
			integer: '',
			numeral: '',
			output_integer: '',
			output_numeral: ''
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
if (total < 1 || total > 3999 || total % 1 !== 0)
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
this.setState({
	output_integer: ''
});
let input = this.state.numeral;
input = input.toUpperCase();
let output = this.numeraltointeger(input);
this.setState({
	output_integer: output
});


}

submitform()
{
this.setState({output_numeral: ''});
let input = this.state.integer;
input = parseFloat(input);
let result = this.integertonumeral(input);
let pattern = /[0-9]/g;
let decimal =  /\./g;
if (pattern.test(input) == false ||decimal.test(input) == true)
{
	result = "You did not enter a number";
}
this.setState({output_numeral: result});
}


	
	
render() {
		
    return (<div>
		<label>Please input a integer from 1 to 3999 to change into a roman numeral</label><br /><br />
		<input type="text" onChange={this.integerinput} /><br /><br />
		<input type="button" onClick={this.submitform} value="submit" /><br /><br />
		<p>{this.state.output_numeral}</p><br /><br />
		<label>Please input a roman numeral from 1 to 3999 to change into a integer</label><br /><br />
		<input type="text" onChange={this.romaninput} /><br /><br />
		<input type="button" onClick={this.submitnumeral} value="submit" /><br /><br />
		<p>{this.state.output_integer}</p> 
	    </div>);
  }
}

export default Numeral;
