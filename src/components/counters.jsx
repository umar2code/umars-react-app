import React, { Component } from 'react';

import Counter from './counter'

class Counters extends Component {
    state = { 
        counters:[
            {
                id:4,
                value:0,
              
            },
            {
                id:2,
                value:0,
               
            },
            {
                id:3,
                value:0,
               
            }


        ]
     }
     handleDelete= counterId =>{
        console.log("Event halder",counterId);
         const counters=this.state.counters.filter(c=>c.id!==counterId);
         this.setState({counters:counters});


    }

 

    handleReset= () =>{
       
        const counters=this.state.counters.map(counter=>{
            counter.value=0;
            return counter
        })
        this.setState({counters})


    }
    render() { 
        console.log('prop',this.props)
        return ( 

<div>
< button onClick={this.handleReset} className="btn btn-primary">Reset All</button>

{this.state.counters.map(counter=> 
<Counter 
key={counter.id} 
value={counter.value}
 
 onDelete={this.handleDelete}
 onReset={this.handleReset}
    counter={counter} 

/>


)}
</div>

         );
    }
}
 
export default Counters;