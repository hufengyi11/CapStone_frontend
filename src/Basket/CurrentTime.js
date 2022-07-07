import React from 'react';
// class App extends React.Component {
//   date = new Date();
//   state = {
//     curTime: ""
//   };
//   componentDidMount() {
//     this.getTime();
//   }
//   getTime = () => {
//     var today = new Date(),
   
//     curTime = today.getHours() + ':' + today.getMinutes();
//     this.setState({ curTime });
//   };
  
//   render(){
//     return (
//       <div className="App">
//         <p>
//           {this.state.curTime}
//           </p>
//       </div>
//     );
//   }
// }
const CurrentTime = () =>{
const date = new Date();


return(
  date.toLocaleString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
)
}

export default CurrentTime;