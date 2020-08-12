using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.RegularExpressions;

namespace baseconverter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
		public static string decimaltobin(int input)
		{
			string output = "";
			string display = "";
			int counter = 0;
			int count = 0;
			int diff = 0;
			int plus = 3;
			int total = input;
			while (Convert.ToInt32(Math.Pow(2, counter)) <= input-Convert.ToInt32(Math.Pow(2, counter)))
			{
				counter += 1;
			}
			
				while ( plus < counter || counter-plus != 4 || counter < plus)
				{
					if (counter < plus)
					{
						diff = plus-counter;
						while (diff > 0)
						{
							output += "0";
							diff -= 1;
						}
						break;
						
					}
					plus += 4;
				}
				
					
			for (int z = counter; z >= 0; z--)
			{
				if (Convert.ToInt32(Math.Pow(2, z)) <= total)
				{
					output += "1";
					total -= Convert.ToInt32(Math.Pow(2, z));

				}
				else
				{
					
					output += "0";
				}
			}
			for (int x = 0; x < output.Length; x++)
			{
				if (count == 4)
				{
					display += " ";
					display += Convert.ToString(output[x]);
					count = 1;
				}
				else
				{
					display += Convert.ToString(output[x]);
					count += 1;
				}
			}
			return display;
		}
		public static int binarytodecimal(string bin)
		{
			char[] array = new char[bin.Length];
			int counter = 0;
			int total = 0;
			char one = Convert.ToChar("1");
			for (int a = array.Length-1; a >= 0; a--)
			{
				array[counter] = bin[a];
				counter += 1;
			}
			for (int l = array.Length-1; l >= 0; l--)
			{
				if (array[l] == one)
				{
					total += Convert.ToInt32(Math.Pow(2, l));
				}
				
			}
			
			return total;
		}
		
		public static string bintohex(string bin)
		{
			int total = binarytodecimal(bin);
			string output = integertohex(total);
			return output;
			
		}
		public static string integertohex(int input)
		{
			int total = input;
			string hexstring = "";
			string binary = decimaltobin(total);
			char[] hexdigits = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
			string[] four = binary.Split(" "); 
			int[] integer = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 };
			if (input <= 2147483647 && input >= 0)
			{
				for (int y = 0; y < four.Length; y++)
				{
					for (int x = hexdigits.Length-1; x >= 0; x--)
					{
						if (binarytodecimal(Convert.ToString(four[y])) == integer[x])
						{
							hexstring += Convert.ToString(hexdigits[x]);
						}
					}
				}
			}
			if (Convert.ToString(hexstring[0]) == "0" && hexstring.Length > 1)
			{
				hexstring = "" + hexstring.Substring(1);
			}
			return hexstring;
		}
		public static int hextodecimal(string code)
		{
			int total = 0;
			char[] hex = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
			int[] number = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
			string input = code.ToLower();
			char[] array = new char[input.Length];
			int count = 0;
			for (int x = input.Length-1; x >= 0; x--)
			{
				array[count] = input[x];
				count += 1;
			}
			for (int length = array.Length-1; length >= 0; length--)
			{
				for (int letter = 0; letter < hex.Length; letter++)
				{
					if (array[length] == hex[letter])
					{
						total += Convert.ToInt32(Math.Pow(16, length))*number[letter];
						letter = 0;
						break;
					}
					
				}
			}
			return total;
		
			
		}
		private void buttonone_Click(object sender, EventArgs e)
		{
			int counter = 0;
			string hex = hextointeger.Text.ToLower().Replace(" ", "");
			char[] array = new char[hex.Length];
			for (int x = 0; x < hex.Length; x++)
			{
				array[counter] = Convert.ToChar(hex[x]);
				counter += 1;
			}
			bool hexdigit = true;
			char[] letter = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
			for (int l = 0; l < array.Length; l++)
			{
				for (int c = 0; c < letter.Length; c++)
				{
					if (array[l] == letter[c])
					{
						break;
					}
					else if (c == letter.Length-1)
					{
						hexdigit = false;
						break;
					}
					
					
				}
				if (hexdigit == false)
				break;
			}
			if (hex != null)
			{
				if (hextodecimal(hex) >= 0 && hexdigit == true)
				{
					output.Text = Convert.ToString(hextodecimal(hex));
				}
				else
				{
					output.Text = "You did not enter a valid hex string";
				}
				
			}
		}
		
		private void buttontwo_Click(object sender, EventArgs e)
		{
			string input = decimaltohex.Text;
			if (Regex.IsMatch(input, @"^\d+$") == true)
			{
				int hex = Convert.ToInt32(decimaltohex.Text);
				output.Text = "";
				output.Text = integertohex(hex);
			}
			else
			{
				output.Text = "";
				output.Text = "not a valid number";
			}
			
		}
		
		private void buttonthree_Click(object sender, EventArgs e)
		{
			string bin = binarytohex.Text.Replace(" ", "");
			if (bin != null)
			{
				if (Regex.IsMatch(bin, @"[0-1]") == true)
				{
					string result = bintohex(bin);
					output.Text = "";
					output.Text = result;
				}
				else
				{
					output.Text = "";
					output.Text = "not a valid binary string";
				}
			}
			
		}
		
		private void buttonfour_Click(object sender, EventArgs e)
		{
			string binary = binarytoint.Text.Replace(" ", "");
			if (binary != null)
			{
				if (Regex.IsMatch(binary, @"[0-1]") == true)
				{
					output.Text = "";
					output.Text = Convert.ToString(binarytodecimal(binary));
				}
				else
				{
					output.Text = "";
					output.Text = "not a valid binary string";
				}
			}
		}
		
		private void clear_Click(object sender, EventArgs e)
		{
			output.Text = "";
			binarytoint.Text = "";
			binarytohex.Text = "";
			decimaltohex.Text = "";
			hextointeger.Text = "";
		}

    }
}
