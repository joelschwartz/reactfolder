import React, { Component } from 'react';
import './App.css';
/* eslint-disable */

import h1 from './audio/heater1.mp3';
import h2 from './audio/heater2.mp3';
import h3 from './audio/heater3.mp3';
import h4 from './audio/heater4.mp3';
import h6 from './audio/heater6.mp3';
import openhat from './audio/openhat.mp3';
import kickhat from './audio/kickhat.mp3';
import kick from './audio/kick.mp3';
import closedhat from './audio/closedhat.mp3';
import chord1 from './audio/chord1.mp3';
import chord2 from './audio/chord2.mp3';
import chord3 from './audio/chord3.mp3';
import shaker from './audio/shaker.mp3';
import openhh from './audio/open-hh.mp3';
import closedhh from './audio/closed-hh.mp3';
import punchykick from './audio/punchy-kick.mp3';
import sidestick from './audio/side-stick.mp3';
import snare from './audio/snare.mp3';



class Drum extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			power: true,
			toggle: false,
			volume: 1,
			display: ''
		}
		this.sound = this.sound.bind(this);
		this.power = this.power.bind(this);
		this.change = this.change.bind(this);
		this.setVolume = this.setVolume.bind(this);
		
	}
	setVolume(event)
	{
		let input = event.target.value;
		this.setState({
			volume: input
		})
	}
	change()
	{
		if (this.state.toggle == false)
		{
			this.setState({
				toggle: true
			});
		}
		else
		{
			this.setState({
				toggle: false
			});
		}
	}
	power()
	{
		if (this.state.power == true)
		{
			this.setState({
				power: false
			});
		}
		else
		{
			this.setState({
				power: true
			});
		}
	}
	sound(query, displayone, id, displaytwo)
	{
		if (this.state.power == true)
		{
			let sound = this.state.volume;
			if (this.state.toggle == false)
			{
				let audio = document.querySelector(query);
				audio.volume = sound;
				audio.play();
				this.setState({
					display:  displayone
				});
			}
			else
			{
				let audio = document.getElementById(id);
				audio.volume = sound
				audio.play();
				this.setState({
					display: displaytwo
				})
			}
		}
	}
	
	
	
  render() {
	  const qsound = this.sound.bind(this, '#Q .clip', 'heater1', 'chord-1', 'chord-1');
	  const wsound = this.sound.bind(this, '#W .clip', 'heater2', 'chord-2', 'chord-2');
	  const esound = this.sound.bind(this, '#E .clip', 'heater3', 'chord-3', 'chord-3');
	  const asound = this.sound.bind(this, '#A .clip', 'heater4', 'shaker', 'shaker');
	  const ssound = this.sound.bind(this, '#S .clip', 'heater6', 'open-hh', 'open-hh');
	  const dsound = this.sound.bind(this, '#D .clip', 'openhat', 'closed-hh', 'closed-hh');
	  const zsound = this.sound.bind(this, '#Z .clip', 'kickhat', 'punchy-kick', 'punchy-kick');
	  const xsound = this.sound.bind(this, '#X .clip', 'kick', 'side-stick', 'side-stick');
	  const csound = this.sound.bind(this, '#C .clip', 'closedhat', 'snare', 'snare');
    return (<div id="drum-machine">
	<span id="display">{this.state.display}</span><br /><br />
	<button id="Q" className="drum-pad btn btn-primary" onKeyDown={qsound} onClick={qsound}>Q
	<audio className="clip" id="Q">
	<source src={h1} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="chord-1">
	<source src={chord1} type="audio/mpeg" />
	</audio>
	</button>
	<button id="W" className="drum-pad btn btn-primary" onKeyDown={wsound} onClick={wsound}>W
	<audio className="clip" id="W">
	<source src={h2} type="audio/mpeg" />
	</audio>
	<audio className="clip btn btn-primary" id="chord-2">
	<source src={chord2} type="audio/mpeg" />
	</audio>
	</button>
	<button id="E" className="drum-pad btn btn-primary" onKeyDown={esound} onClick={esound}>E
	<audio className="clip" id="E">
	<source src={h3} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="chord-3">
	<source src={chord3} type="audio/mpeg" />
	</audio>
	</button><br />
	<button id="A" className="drum-pad btn btn-primary" onKeyDown={asound} onClick={asound}>A
	<audio className="clip" id="A">
	<source src={h4} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="shaker">
	<source src={shaker} type="audio/mpeg" />
	</audio>
	</button>
	<button id="S" className="drum-pad btn btn-primary" onKeyDown={ssound} onClick={ssound}>S
	<audio className="clip" id="S">
	<source src={h6}  type="audio/mpeg" />
	</audio>
	<audio className="clip" id="open-hh">
	<source src={openhh} type="audio/mpeg" />
	</audio>
	</button>
	<button id="D" className="drum-pad btn btn-primary" onKeyDown={dsound} onClick={dsound}>D
	<audio className="clip" id="D">
	<source src={openhat} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="closed-hh">
	<source src={closedhh} type="audio/mpeg" />
	</audio>
	</button><br />
	<button id="Z" className="drum-pad btn btn-primary" onKeyDown={zsound} onClick={zsound}>Z
	<audio className="clip" id="Z">
	<source src={kickhat} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="punchy-kick">
	<source src={punchykick} type="audio/mpeg" />
	</audio>
	</button>
	<button id="X" className="drum-pad btn btn-primary" onKeyDown={xsound} onClick={xsound}>X
	<audio className="clip" id="X">
	<source src={kick} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="side-stick">
	<source src={sidestick} type="audio/mpeg" />
	</audio>
	</button>
	<button id="C" className="drum-pad btn btn-primary" onKeyDown={csound} onClick={csound}>C
	<audio className="clip" id="C">
	<source src={closedhat} type="audio/mpeg" />
	</audio>
	<audio className="clip" id="snare">
	<source src={snare} type="audio/mpeg" />
	</audio>
	</button><br />
	<button className="btn btn-primary" onClick={this.power}>power</button>
	<button className="btn btn-primary" onClick={this.change}>change keys</button><br /><br />
	<label>please set the volume</label><br />
	<input type="range" id="volume" min="0" max="1" step="0.01" value={this.state.volume} onChange={this.setVolume} />
    </div>);
  }
}

export default Drum;
