import React from 'react';
import './App.css';
/* eslint-disable */
class Calculator extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			display: '',
			operator: '',
			decimalcounter: 0
		}
	this.one = this.one.bind(this);
	this.two = this.two.bind(this);
	this.three = this.three.bind(this);
	this.four = this.four.bind(this);
	this.five = this.five.bind(this);
	this.six = this.six.bind(this);
	this.seven = this.seven.bind(this);
	this.eight = this.eight.bind(this);
	this.nine = this.nine.bind(this);
	this.zero = this.zero.bind(this);
	this.plus = this.plus.bind(this);
	this.minus = this.minus.bind(this);
	this.multiply = this.multiply.bind(this);
	this.divide = this.divide.bind(this);
	this.exponent = this.exponent.bind(this);
	this.calculate = this.calculate.bind(this);
	this.clearScreen = this.clearScreen.bind(this);
	this.decimal = this.decimal.bind(this);
	this.left = this.left.bind(this);
	this.right = this.right.bind(this);
	}
	
	
one() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "1";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
			display += "1";
			operator = "";
	}
this.setState({
	display: display,
	operator: operator
});
	document.getElementById("display").value = display;
}
two() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "2";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
			display += "2";
			operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
three() {
var display = this.state.display;
var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "3";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "3";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
four() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "4";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "4";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
five() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "5";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "5";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
six() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "6";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "6";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
seven() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "7";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
			display += "7";
			operator = "";
		}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
eight() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "8";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "8";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
nine() {
	var display = this.state.display;
	var operator = this.state.operator;
	if (display.length == 0)
	{
		display += "9";
	}
	else
	{
		if (operator != null)
		{
			display += operator;
		}
		display += "9";
		operator = "";
	}
	this.setState({
		display: display,
		operator: operator
	});
	document.getElementById("display").value = display;
}
zero() {
var display = this.state.display;
var operator = this.state.operator;
if ( display[display.length-1] !== "/" )
{
	if (isNaN(parseFloat(display[display.length-1])) === false || display[display.length-1] === ".")
	{
		if (operator !== null && operator !== "/")
		{
			display += operator;
			display += "0";
			operator = "";
			document.getElementById("display").value = display;
		}
		else
		{
			document.getElementById("display").value = display + operator;
		}
	}
}
this.setState({
	display: display,
	operator: operator
});
}
left()
{
	var display = this.state.display;
	var operator = this.state.operator;
	if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "**")
	{
		display += operator;
		display += "(";
		operator = "";
		document.getElementById("display").value = display;
	}
	else if (display[display.length-1] !== "(" && display[display.length-1] !== ")" && isNaN(parseFloat(display[display.length-1])) === true)
	{
	display += "(";
	document.getElementById("display").value = display;
	}
	this.setState({
		display: display,
		operator: operator
	});
}
right()
{
	var display = this.state.display;
	if (display[display.length-1] !== "(" && display[display.length-1] !== "" && display !== "" && (isNaN(parseFloat(display[display.length-1])) === false || display[display.length-1] === ")" ))
	{
		var array = display.split("");
		var counter = 0;
		var counttwo = 0;
		for (var x = 0; x < array.length; x++)
		{
		if (array[x] === "(")
		{
			counter += 1;
		}
		else if (array[x] === ")")
		{
			counttwo += 1;
		}
	}
	if (counter > counttwo)
	{
		display += ")";
		document.getElementById("display").value = display;
	}
}
this.setState({
	display: display
});
}
decimal()
{
	var display = this.state.display;
	var operator = this.state.operator;
	var decimalcounter = this.state.decimalcounter;
	if (display.length == 0)
	{
		display = ".";
		decimalcounter += 1;
		document.getElementById("display").value = display;
	}
	else if (operator === "+" || operator === "-" ||
		operator === "*" || operator === "/" || operator === "**")
		{
				display += operator;
				operator = "";
				display += ".";
				decimalcounter += 1;
				document.getElementById("display").value = display;
		}
	else if (display[display.length-1] === "(")
	{
		display += ".";
		decimalcounter += 1;
		document.getElementById("display").value = display;
	}
	else if (display[display.length-1] !== ".")
	{
		if (isNaN(parseFloat(display[display.length-1])) === false)
			{

				if (decimalcounter === 0)
				{
				display += ".";
				decimalcounter += 1;
				document.getElementById("display").value = display;
				}
			}
	}
	else if (isNaN(parseFloat(display)) === false)
	{
		display += ".";
		decimalcounter += 1;
		document.getElementById("display").value = display;
	}
this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}

plus() {
	var display = this.state.display;
	var operator = this.state.operator;
	var decimalcounter = this.state.decimalcounter;
	
	if (display.length != 0)
	{
		
		if (display[display.length-1] != "(")
		{
			if (isNaN(parseFloat(display[display.length-1])) === true &&  display[display.length-1] != ")")
			{
				return;
			}
			else
			{
				operator = "+";
				document.getElementById("display").value = display + operator;
				if (decimalcounter > 0)
				{
					decimalcounter -= 1;
				}

			}
		}
		
	}
	this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}
minus() {
var display = this.state.display;
var operator = this.state.operator;
var decimalcounter = this.state.decimalcounter;

	if (display.length != 0)
	{
		if (display[display.length-1] != "(")
		{
			if (isNaN(parseFloat(display[display.length-1])) === true && display[display.length-1] != ")")
			{
				return;
			}
			else
			{
				operator += "-";
				document.getElementById("display").value = display + operator;
				if (decimalcounter > 0)
				{
					decimalcounter -= 1;
				}
			}
		}
		
	}
	this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
	
}
multiply() {
var display = this.state.display;
var operator = this.state.operator;
var decimalcounter = this.state.decimalcounter;

	if (display.length != 0)
	{
		if (display[display.length-1] != "(")
		{
			if (isNaN(parseFloat(display[display.length-1])) === true && display[display.length-1] != ")")
			{
				return;
			}
			else
			{
				operator = "*";
				document.getElementById("display").value = display + operator;
				if (decimalcounter > 0)
				{
					decimalcounter -= 1;
				}
			}
		}
		
		
	}
	this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}
divide() {
var display = this.state.display;
var operator = this.state.operator;
var decimalcounter = this.state.decimalcounter;
	if (display.length != 0)
	{
		
		if (display[display.length-1] != "(")
		{
			if (isNaN(parseFloat(display[display.length-1])) === true && display[display.length-1] != ")")
			{
				return;
			}
			else
			{
				operator = "/";
				document.getElementById("display").value = display + operator;
				if (decimalcounter > 0)
				{
					decimalcounter -= 1;
				}
			}
		}
		
	}
	this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}
exponent() {
var display = this.state.display;
var operator = this.state.operator;
var decimalcounter = this.state.decimalcounter;
	
	if (display.length != 0)
	{
		
		if (display[display.length-1] != "(")
		{
			if (isNaN(parseFloat(display[display.length-1])) === true && display[display.length-1] != ")")
			{
				return;
			}
			else
			{
				operator = "**";
				document.getElementById("display").value = display + operator;
				if (decimalcounter > 0)
				{
					decimalcounter -= 1;
				}
			}
		}
		
	}
	this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}
calculate()
{
var display = this.state.display;
var value = eval(display);
document.getElementById("display").value = value.toString();
this.setState({
	display: value.toString(),
	decimalcounter: 0,
	operator: ''
});
}
clearScreen()
{
var display = this.state.display;
display = "";
document.getElementById("display").value = display;
this.setState({
	display: display,
	operator: '',
	decimalcounter: 0
});
}
	
	
	
	
  render() {
		
    return (
      <div>
			<input type="text" name="value" id="display" readOnly /><br /><br />
			<button onClick={this.one}>1</button>
			<button onClick={this.two}>2</button>
			<button onClick={this.three}>3</button>
			<button onClick={this.four}>4</button>
			<button onClick={this.five}>5</button><br />
			<button onClick={this.six}>6</button>
			<button onClick={this.seven}>7</button>
			<button onClick={this.eight}>8</button>
			<button onClick={this.nine}>9</button>
			<button onClick={this.zero}>0</button><br />
			<button onClick={this.plus}>+</button>
			<button onClick={this.minus}>-</button>
			<button onClick={this.multiply}>*</button>
			<button onClick={this.divide}>/</button>
			<button onClick={this.exponent}>^</button><br />
			<button onClick={this.calculate}>=</button>
			<button onClick={this.clearScreen}>C</button>
			<button onClick={this.decimal} id="decimal">.</button>
			<button onClick={this.left}>(</button>
			<button onClick={this.right}>)</button>
      </div>
    );
  }
}
export default Calculator;
