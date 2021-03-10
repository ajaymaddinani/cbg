import React, { Component } from 'react'
import Cards from '../Card/Cards';
export class Dashboard extends Component {
        constructor(props){
                super(props);
                this.state = {
                name:'',
                };
               }
  componentDidMount() {
      console.log(this.props.location.state);
      this.setState({
        name: this.props.location.state.detail
      });
      }
        render() {
                return (
                        <div className="container">   
                         <div className="row">
                         <div className="col-sm-3"> Welcome { this.state.name } </div>
                         <div className="col-sm-9">
                             <Cards></Cards>
                         </div>
                         </div>
                        </div>
                )
        }
}
export default Dashboard