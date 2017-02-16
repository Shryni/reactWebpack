import React from 'react'
import ReactDOM from 'react-dom'
var User = React.createClass({	

	getInitialState: function(){
		return{
				   disp : ['dontshow','dontshow','dontshow','dontshow'],
                   name : ['Shryni','Divyani','Anupama','Lakhveer'],
                   country :['India','USA','Riyadh','Australia'],
                   dateTime :['Asia/Kolkata','Asia/Riyadh','Australia/Perth','Australia/Adelaide'],
              }
	},
	update : function(index)
	{
		
		var tempdate = this.state.dateTime;
		var tempd = this.state.dateTime[index];
		tempdate.splice(index,1,tempd)
		this.setState({dateTime: tempdate});

	},

	onHoverIn: function(index){
		var tempdate = this.state.dateTime;
		var tempd = this.state.dateTime[index];
		tempdate.splice(index,1,tempd)
		this.setState({dateTime: tempdate});

		var temp2 = this.state.disp;
		temp2.splice(index,1,'show')

		setInterval(this.update.bind(this,index),1000)
		this.setState({disp : temp2});
		
	},
	onHoverOut: function(index){
		var temp2 = this.state.disp;
		temp2.splice(index,1,'dontshow')

		setInterval(this.update.bind(this,index),1000)

		this.setState({disp : temp2});

	},
	
	
	onEach : function(dets,i)
	{
		
			var loctime = new Date().toLocaleTimeString('en-US', { timeZone: this.state.dateTime[i] });
			var locDate = new Date().toLocaleDateString('en-US', { timeZone: this.state.dateTime[i] });	
	 
		return(
	       	<div>
	       		
	       		<span onClick={this.onHoverIn.bind(this,i)} onDoubleClick={this.onHoverOut.bind(this,i)}>User:{dets}</span>
	       		<span className={this.state.disp[i]} >
					COUNTRY: {this.state.country[i]}
			       	<br />
			       	TIME: {loctime}
			       	<br />
		       		DATE:{locDate}
	       			<br />
	       			<br />	
	    		</span>
	       		
	       		
	       	</div>
	   		 );
	},
	render: function(){
				return(
					<div>
					{
						this.state.name.map(this.onEach)
					}
					<br/>
					</div>
					);
				 }
});
ReactDOM.render(<User/>,document.getElementById('main'));
