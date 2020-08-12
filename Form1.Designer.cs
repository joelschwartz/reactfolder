namespace baseconverter
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
			this.hextointeger = new System.Windows.Forms.TextBox();
			this.hextointlabel = new System.Windows.Forms.Label();
			this.decimaltohex = new System.Windows.Forms.TextBox();
			this.decimaltohexlabel = new System.Windows.Forms.Label();
			this.binarytohex = new System.Windows.Forms.TextBox();
			this.bintohexlabel = new System.Windows.Forms.Label();
			this.binarytoint = new System.Windows.Forms.TextBox();
			this.bintointlabel = new System.Windows.Forms.Label();
			this.buttonone = new System.Windows.Forms.Button();
			this.buttontwo = new System.Windows.Forms.Button();
			this.buttonthree = new System.Windows.Forms.Button();
			this.buttonfour = new System.Windows.Forms.Button();
			this.clear = new System.Windows.Forms.Button();
			this.output = new System.Windows.Forms.Label();
			
			this.hextointlabel.Location = new System.Drawing.Point(166, 20);
			this.hextointlabel.Size = new System.Drawing.Size(350, 30);
			this.hextointlabel.Name = "hex to integer label";
			this.hextointlabel.Text = "Please enter a hex string to convert to a integer";
			this.hextointlabel.TabIndex = 0;
			
			this.hextointeger.Location = new System.Drawing.Point(166, 55);
            this.hextointeger.Name = "hex to integer";
            this.hextointeger.Size = new System.Drawing.Size(483, 20);
            this.hextointeger.TabIndex = 1;
			
			this.buttonone.Location = new System.Drawing.Point(166, 95);
            this.buttonone.Name = "submit";
            this.buttonone.Size = new System.Drawing.Size(75, 23);
            this.buttonone.TabIndex = 2;
            this.buttonone.Text = "submit";
            this.buttonone.UseVisualStyleBackColor = true;
            this.buttonone.Click += new System.EventHandler(this.buttonone_Click);
			
			this.decimaltohexlabel.Location = new System.Drawing.Point(166, 120);
			this.decimaltohexlabel.Size = new System.Drawing.Size(350, 30);
			this.decimaltohexlabel.Name = "integer to hex label";
			this.decimaltohexlabel.Text = "Please enter a integer to convert to a hex string";
			this.decimaltohexlabel.TabIndex = 3;
			
			this.decimaltohex.Location = new System.Drawing.Point(166, 140);
            this.decimaltohex.Name = "integer to hex";
            this.decimaltohex.Size = new System.Drawing.Size(483, 20);
            this.decimaltohex.TabIndex = 4;
			
			this.buttontwo.Location = new System.Drawing.Point(166, 170);
            this.buttontwo.Name = "submit";
            this.buttontwo.Size = new System.Drawing.Size(75, 23);
            this.buttontwo.TabIndex = 5;
            this.buttontwo.Text = "submit";
            this.buttontwo.UseVisualStyleBackColor = true;
            this.buttontwo.Click += new System.EventHandler(this.buttontwo_Click);
			
			this.bintohexlabel.Location = new System.Drawing.Point(166, 200);
			this.bintohexlabel.Size = new System.Drawing.Size(350, 30);
			this.bintohexlabel.Name = "binary to hex label";
			this.bintohexlabel.Text = "Please enter a binary string to convert to a hex string";
			this.bintohexlabel.TabIndex = 6;
			
			this.binarytohex.Location = new System.Drawing.Point(166, 220);
            this.binarytohex.Name = "binary to hex";
            this.binarytohex.Size = new System.Drawing.Size(483, 20);
            this.binarytohex.TabIndex = 7;
			
			this.buttonthree.Location = new System.Drawing.Point(166, 250);
            this.buttonthree.Name = "submit";
            this.buttonthree.Size = new System.Drawing.Size(75, 23);
            this.buttonthree.TabIndex = 8;
            this.buttonthree.Text = "submit";
            this.buttonthree.UseVisualStyleBackColor = true;
            this.buttonthree.Click += new System.EventHandler(this.buttonthree_Click);
			
			this.bintointlabel.Location = new System.Drawing.Point(166, 275);
			this.bintointlabel.Size = new System.Drawing.Size(350, 30);
			this.bintointlabel.Name = "binary to integer label";
			this.bintointlabel.Text = "Please enter a binary string to convert to a integer";
			this.bintointlabel.TabIndex = 9;
			
			this.binarytoint.Location = new System.Drawing.Point(166, 295);
            this.binarytoint.Name = "binary to hex";
            this.binarytoint.Size = new System.Drawing.Size(483, 20);
            this.binarytoint.TabIndex = 10;
			
			this.buttonfour.Location = new System.Drawing.Point(166, 345);
            this.buttonfour.Name = "submit";
            this.buttonfour.Size = new System.Drawing.Size(75, 23);
            this.buttonfour.TabIndex = 11;
            this.buttonfour.Text = "submit";
            this.buttonfour.UseVisualStyleBackColor = true;
            this.buttonfour.Click += new System.EventHandler(this.buttonfour_Click);
			
			this.clear.Location = new System.Drawing.Point(250, 345);
            this.clear.Name = "clear";
            this.clear.Size = new System.Drawing.Size(75, 23);
            this.clear.TabIndex = 12;
            this.clear.Text = "clear";
            this.clear.UseVisualStyleBackColor = true;
            this.clear.Click += new System.EventHandler(this.clear_Click);
			
			
			this.output.Location = new System.Drawing.Point(166, 380);
			this.output.Size = new System.Drawing.Size(350, 30);
			this.output.Name = "output";
			this.output.TabIndex = 13;
			
			
            this.components = new System.ComponentModel.Container();
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 500);
            this.Text = "base converter";
			this.Controls.Add(this.hextointeger);
			this.Controls.Add(this.hextointlabel);
			this.Controls.Add(this.decimaltohex);
			this.Controls.Add(this.decimaltohexlabel);
			this.Controls.Add(this.binarytohex);
			this.Controls.Add(this.bintohexlabel);
			this.Controls.Add(this.binarytoint);
			this.Controls.Add(this.bintointlabel);
			this.Controls.Add(this.buttonone);
			this.Controls.Add(this.buttontwo);
			this.Controls.Add(this.buttonthree);
			this.Controls.Add(this.buttonfour);
			this.Controls.Add(this.clear);
			this.Controls.Add(this.output);
			this.ResumeLayout(false);
            this.PerformLayout();
        }

        #endregion
		private System.Windows.Forms.TextBox hextointeger;
		private System.Windows.Forms.Label hextointlabel;
		private System.Windows.Forms.TextBox decimaltohex;
		private System.Windows.Forms.Label decimaltohexlabel;
		private System.Windows.Forms.TextBox binarytohex;
		private System.Windows.Forms.Label bintohexlabel;
		private System.Windows.Forms.TextBox binarytoint;
		private System.Windows.Forms.Label bintointlabel;
		private System.Windows.Forms.Button buttonone;
		private System.Windows.Forms.Button buttontwo;
		private System.Windows.Forms.Button buttonthree;
		private System.Windows.Forms.Button buttonfour;
		private System.Windows.Forms.Button clear;
		private System.Windows.Forms.Label output;
		
    }
}

