import React from 'react'
import ReactDOM from 'react-dom'

var CommentBox = React.createClass({
	getInitialState : function()
	{
		return {videoID:" " }
	},
	handleClick : function()
	{
		var video = this.refs.vid.value;
		
		this.setState({ videoID : video });
	},
	
	render : function()
	{
		return (
			<div>
			Hello
			Enter: <input ref="vid"/>
 			<button onClick={this.handleClick}>Load Video</button>
 			{
 				this.state.videoID ? <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+this.state.videoID} frameborder="0" allowfullscreen></iframe> : <p>Not found</p>
 			}

			
			</div>
			);
	}
});


ReactDOM.render(
  <CommentBox/>,
  document.getElementById('main')
);