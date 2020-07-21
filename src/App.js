import React from 'react';
import './App.css';
/* eslint-disable */
class Binary extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = {
			english: '',
			binary: ''
		}
		this.binarytoenglish = this.binarytoenglish.bind(this);
		this.integertobinary = this.integertobinary.bind(this);
		this.englishtobinary = this.englishtobinary.bind(this);
		this.submitform = this.submitform.bind(this);
		this.englishform = this.englishform.bind(this);
	
	}
	
	
binarytoenglish(binary) {
  let output = "";
  let integers = [];
  const alphabet = [" ", '!', '\'', ',', '.', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const intnumbers = ['32', '33', '39', '44', '46', '58', '59', '63', '65', '66', '67', '68', '69', '70',
  '71', '72', '73','74', '75', '76', '77', '78', '79', '80', '81', '82',
  '83', '84', '85', '86', '87', '88', '89', '90', '97', '98', '99', '100',
  '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111','112',
  '113', '114', '115', '116', '117', '118', '119', '120', '121', '122'];
  let total = 0;
  let input = binary.split(" ");
  let exponent = 7;
  for (let x = 0; x < input.length; x++)
  {
    for (let y = 0; y < input[x].length; y++)
    {
      if (input[x][y] == "1")
      {
        total += Math.pow(2, exponent);
      }
      if (y == input[x].length-1)
      {
        integers.push(total);
        total = 0;
		exponent = 7;
		break;
      }
	  exponent -= 1;
    }
  }
  

  for (let c = 0; c < integers.length; c++)
  {
    for (let d = 0; d < intnumbers.length; d++)
    {
      if (integers[c] == intnumbers[d])
      {
          output += alphabet[d];
		  break;
      }
    }
  }
  return output;
}

integertobinary(number)
{
let digit = "";
let total = number;
let counter = 7;
for (let b = counter; b >= 0;)
	{
		if (total >= Math.pow(2, b))
		{
			digit += "1";
			total -= Math.pow(2, b);
			b -= 1;
		}
		else 
		{
			digit += "0";
			b -= 1;
		}
	}
	return digit;
}
englishtobinary(english)
{
let binary = "";
let letter = english.split("");

let intarray = [];
const alphabet = [" ", '!', '\'', ',', '.', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const intnumbers = ['32', '33', '39', '44', '46', '58', '59', '63', '65', '66', '67', '68', '69', '70',
  '71', '72', '73','74', '75', '76', '77', '78', '79', '80', '81', '82',
  '83', '84', '85', '86', '87', '88', '89', '90', '97', '98', '99', '100',
  '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111','112',
  '113', '114', '115', '116', '117', '118', '119', '120', '121', '122'];
  for (let l = 0; l < letter.length; l++)
  {
	for (let n = 0; n < alphabet.length; n++)
	{
		if (letter[l] === alphabet[n])
		{
			intarray.push(intnumbers[n]);
		}
	}
  }
  
  for (let a = 0; a < intarray.length; a++)
  {
		if (a < intarray.length-1)
		{
			binary += this.integertobinary(intarray[a]) + " ";
		}
		else
		{
			binary += this.integertobinary(intarray[a]);
		}
  }
  return binary;
}
submitform()
{
let number = document.getElementById('binary').value;
let letters = this.binarytoenglish(number);
this.setState({
	english: letters
});

}
englishform()
{
let english = document.getElementById('english').value;
let result = this.englishtobinary(english);
this.setState({
	binary: result
});
}
	
	
	
	
render() {
		
    return (
      <div>
			<div>
			<label>Please input a binary string to change into english</label><br />
			<input type="text" id="binary" /><br /><br />
			<button onClick={this.submitform}>submit</button><br /><br />
			<p>{this.state.english}</p>
			</div>
			<div>
			<br /><br />
			<label>Please enter english letters to convert to binary</label><br /><br />
			<input type="text" id="english" /><br /><br />
			<button onClick={this.englishform} value="submit">submit</button><br /><br />
			<p>{this.state.binary}</p>
			</div>
			
      </div>
    );
  }
}

export default Binary;


