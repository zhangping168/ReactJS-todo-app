import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Note from './Note/Note';

class App extends Component {
  constructor(props){
	super(props);
	
	this.state= {
		notes :[
		{id:1, noteConent:'This is one note'},
		{id:2, noteConent:'This is two note'},
		],
	};
  }
	
  render() {
    return (
      <div className="notesWrapper">
		<div className="notesHeader">
			<h1>Todo Firebase Notes App</h1>
		</div>
		<div className="notesBody">
		{
			this.state.notes.map((note)=>{
				return ( <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>)
			})
			
			
		}
		</div>
		<div className="notesFooter"></div>
       
	   
      </div>
    );
  }
}

export default App;
