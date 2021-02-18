import './search.scss'
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import Loader from 'react-loader';

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: '',
            url:'',
            error: 'no',
            count: 0,
            loading:true
        }
    }


    render(){
        


            const onClick = (e) => {
                const count = this.state.count;
                if(count == 0){
                    let stringvalue = this.state.value;
                if(stringvalue != ""){
                    if(stringvalue.includes('http')){
                        let urlstrings =  Math.random().toString(36).substring(2,7);
                        this.setState({loading:false});
                     axios.post('https://urlbackend.joshuadaniel.me/add',{
                         url:this.state.value,
                         param:urlstrings
                     }).then((response)=>{
                        this.setState({url:"https://url.joshuadaniel.me/url/"+urlstrings})
                        this.setState({loading:true});
                     })
                    
                    } else{
                        this.setState({error:"yes"})
                        return;
                    }
                }else{
                    this.setState({error:"yes"})
                        return;
                }
                this.setState({count:1});
                }
                else{
                    e.preventDefault();
                    alert('Link Already Generated !')
                }
            }

        return(
            <div>
<Loader loaded={this.state.loading}>
<div className="search-wrapper">
<input className={this.state.error == 'no' ? "search" : "search error"} placeholder="Enter your url" onChange={(e) => {this.setState({value:e.target.value})}} value={this.state.value} />
<div className="icon-wrapper" onClick={onClick}>
<a><FaArrowRight size="24" className="search-icon" /></a>
</div>
</div>
 <div className="urldisplay">
 <input type="text" disabled placeholder={this.state.error == 'no' ? "Please enter Url to generate short url" : "Error please enter a valid url"} value={this.state.url}/>
</div>
<div className="note">
    <p>Please dont spam its a portfolio project</p>
</div>
</Loader>
</div>
);
}
}

export default Search;