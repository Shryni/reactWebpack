import React from 'react';
import ReactDOM from 'react-dom';


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
		setTimeout(()=>{ 
		var temp2 = this.state.disp;
		if(temp2[index] === "show")
		{
		temp2.splice(index,1,'dontshow')
		this.setState({disp : temp2});
	    }
		setInterval(this.update.bind(this,index),1000)
	},1000);
	},

	changeClass : function(index)
	{
		var temp = this.state.disp;
		temp.splice(index,1,'moreShow')
		this.setState({disp : temp});
	},
	changeBack : function(index)
	{
		var temp = this.state.disp;
		temp.splice(index,1,'dontshow')
		this.setState({disp : temp});

	},

	onEach : function(dets,i)
	{
		
			var loctime = new Date().toLocaleTimeString('en-US', { timeZone: this.state.dateTime[i] });
			var locDate = new Date().toLocaleDateString('en-US', { timeZone: this.state.dateTime[i] });	
	 
		return(
			<div>
	       	
	       		<span onMouseOver={this.onHoverIn.bind(this,i)} onMouseOut={this.onHoverOut.bind(this,i) } >User:{dets}</span>
	       	
	       	<div className={this.state.disp[i]} onMouseOver={this.changeClass.bind(this,i)} onMouseOut={this.changeBack.bind(this,i)} >
	       	<span  >
	       			User : {this.state.name[i]}
	       			<br/>
					COUNTRY: {this.state.country[i]}
			       	<br />
			       	TIME: {loctime}
			       	<br />
		       		DATE:{locDate}
	       			<br />
	       			<br />	
	    		</span>
	    		</div>
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

