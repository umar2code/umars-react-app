import React, { Component } from 'react';

class counter extends Component {
    state={
        value: this.props.counter.value,
        sbkaMalik:"ALLAHU AKBER",
        imageUrl:'https://picsum.photos/200',
        tags:["tag1","tag2","tag3"]
    };
    styles={
fontSize:10,
fontWeight:"bold"
    };
// constructor(){
//     super();
//     this.handleIncreament=this.handleIncreament.bind(this);
// }

    handleIncreament= (product)=>{
       console.log(product);
        this.setState({value:this.state.value+1});
        //console.log("increament",this)
    }

  

  
    render() { 
        console.log('prop',this.props)
       
        return (
        
       <div>

        <h4>{this.props.counter.id}</h4>


        <span  className={this.getclassesForvalue()}>{this.formatvalue()}</span>
        <button  onClick={()=>this.handleIncreament({id:10})} className="btn btn-secondary btn-sm">Tasbeeh</button>
       
       <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Reset</button>
        </div>
    );
    }
formatvalue(){
    const {value}=this.state;
    return value===0?"To Start":value;
}

getclassesForvalue(){
    let classes="badge m-2 badge-";
    classes+=(this.state.value===0)?"warning":"primary";
    return classes;
}

}
 
export default counter;