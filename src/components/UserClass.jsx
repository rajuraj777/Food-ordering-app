import React from "react";
class UserClass extends React.Component{
   constructor(props){
      super(props);
      this.state={
         count:0,
         count2:2
      };
      console.log(this.props.name+"child ctor");
   }
   componentDidMount(){
      console.log(this.props.name+"child mounted");
    }
   render(){   
      console.log(this.props.name+"child rendered");
      const {displayed}=this.props;
      const {count,count2}=this.state;
      return(
         <>

            <h1>{this.props.name}</h1>
            <h2>{displayed}</h2>
            <p>Count = {count}</p>
            <button onClick={()=>{
               this.setState({
                  count: this.state.count+1
               })
            }}>Count++</button>
         </>
      );
   }
}
export default UserClass;