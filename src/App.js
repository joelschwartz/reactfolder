import React from 'react';
import './App.css';

class Calculator extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			display: '',
			operator: '',
			decimalcounter: 0
		}
	this.number = this.number.bind(this);
	this.zero = this.zero.bind(this);
	this.operation = this.operation.bind(this);
	this.calculate = this.calculate.bind(this);
	this.clearScreen = this.clearScreen.bind(this);
	this.decimal = this.decimal.bind(this);
	this.left = this.left.bind(this);
	this.right = this.right.bind(this);
	}
	
number(input) {
	let {display, operator} = this.state;
	if (display.length == 0)
	{
		display += input;
	}
	else
	{
		display += input;
		operator = "";
	}
this.setState({
	display: display,
	operator: operator
});
}

zero() {
let {display, operator} = this.state;
if ( display[display.length-1] !== "/" )
{
	if (isNaN(parseFloat(display[display.length-1])) === false || display[display.length-1] === ".")
	{
		if (operator !== null && operator !== "/")
		{
			display += "0";
			operator = "";
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
	let {display, operator} = this.state;
	if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "**")
	{
		display += "(";
		operator = "";
	}
	else if (display[display.length-1] !== "(" && display[display.length-1] !== ")" && isNaN(parseFloat(display[display.length-1])) === true)
	{
	display += "(";
	}
	this.setState({
		display: display,
		operator: operator
	});
}
right()
{
	let {display} = this.state;
	if (display[display.length-1] !== "(" && display[display.length-1] !== "" && display !== "" && (isNaN(parseFloat(display[display.length-1])) === false || display[display.length-1] === ")" ))
	{
		const array = display.split("");
		let counter = 0;
		let counttwo = 0;
		for (let x = 0; x < array.length; x++)
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
	}
}
this.setState({
	display: display
});
}
decimal()
{
	let {display, operator, decimalcounter} = this.state;
	if (display.length == 0)
	{
		display = ".";
		decimalcounter += 1;
	}
	else if (operator === "+" || operator === "-" ||
		operator === "*" || operator === "/" || operator === "**")
		{
				operator = "";
				display += ".";
				decimalcounter += 1;
		}
	else if (display[display.length-1] === "(")
	{
		display += ".";
		decimalcounter += 1;
	}
	else if (display[display.length-1] !== ".")
	{
		if (isNaN(parseFloat(display[display.length-1])) === false)
			{

				if (decimalcounter === 0)
				{
					display += ".";
					decimalcounter += 1;
				}
			}
	}
	else if (isNaN(parseFloat(display)) === false)
	{
		display += ".";
		decimalcounter += 1;
	}
this.setState({
	display: display,
	operator: operator,
	decimalcounter: decimalcounter
});
}


operation(symbol) {
let {display, operator, decimalcounter} = this.state;
	
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
				operator = symbol;
				display += operator;
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
let display = this.state.display;
let leftcount = 0;
let rightcount = 0;
	for (let z = 0; z < display.length; z++)
	{
		if (display[z] == ')')
		{
			rightcount += 1;
		}
		else if (display[z] == '(')
		{
			leftcount += 1;
		}
	}
	if (leftcount == rightcount)
	{
		let value = eval(display);
		this.setState({
			display: value.toString(),
			decimalcounter: 0,
			operator: ''
		});
	}
}
clearScreen()
{
	
this.setState({
	display: "",
	operator: '',
	decimalcounter: 0
});
}
	
	
	
	
  render() {
	  const one = this.number.bind(this, "1");
	  const two = this.number.bind(this, "2");
	  const three = this.number.bind(this, "3");
	  const four = this.number.bind(this, "4");
	  const five = this.number.bind(this, "5");
	  const six = this.number.bind(this, "6");
	  const seven = this.number.bind(this, "7");
	  const eight = this.number.bind(this, "8");
	  const nine = this.number.bind(this, "9");
	  const plus = this.operation.bind(this, "+");
	  const minus = this.operation.bind(this, "-");
	  const multiply = this.operation.bind(this, "*");
	  const divide = this.operation.bind(this, "/");
	  const exponent = this.operation.bind(this, "**");
    return (
      <div>
			<input type="text" value={this.state.display} readOnly /><br /><br />
			<button onClick={one}>1</button>
			<button onClick={two}>2</button>
			<button onClick={three}>3</button>
			<button onClick={four}>4</button>
			<button onClick={five}>5</button><br />
			<button onClick={six}>6</button>
			<button onClick={seven}>7</button>
			<button onClick={eight}>8</button>
			<button onClick={nine}>9</button>
			<button onClick={this.zero}>0</button><br />
			<button onClick={plus}>+</button>
			<button onClick={minus}>-</button>
			<button onClick={multiply}>*</button>
			<button onClick={divide}>/</button>
			<button onClick={exponent}>^</button><br />
			<button onClick={this.calculate}>=</button>
			<button onClick={this.clearScreen}>C</button>
			<button onClick={this.decimal}>.</button>
			<button onClick={this.left}>(</button>
			<button onClick={this.right}>)</button>
      </div>
    );
  }
}

export default Calculator;
