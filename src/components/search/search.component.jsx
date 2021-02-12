import './search.scss'
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'


class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: '',
            url:null,
            error: 'no'
        }
    }


    render(){
        
         const onKeyPress =  async (e)=> {
            let valueString = e.target.value;
            if(e.key == 'Enter'){
               if(valueString != ''){
                if(valueString.includes('http')){
                    let urlstring =  Math.random().toString(36).substring(2,7);
                    await this.setState({value:e.target.value,url:"http://shorturl/"+urlstring})
                } else{
                    this.setState({error:"yes"})
                    return;
                }
               }else{
                this.setState({error:"yes"})
                    return;
               }
            }
            }

            const onClick = async (e) => {
                let stringvalue = this.state.value;
                if(stringvalue != ""){
                    if(stringvalue.includes('http')){
                        let urlstrings =  Math.random().toString(36).substring(2,7);
                        await this.setState({value:e.target.value,url:"https://sht.url/"+urlstrings})
                    } else{
                        this.setState({error:"yes"})
                        return;
                    }
                }else{
                    this.setState({error:"yes"})
                        return;
                }
            }

        return(
            <div>
            <div className="search-wrapper">
<input className={this.state.error == 'no' ? "search" : "search error"} placeholder="Enter your url" onKeyPress={onKeyPress}/>
<div className="icon-wrapper" onClick={onClick}>
<a><FaArrowRight size="24" className="search-icon" /></a>
</div>
</div>
 <div className="urldisplay">
 <input type="text" disabled placeholder={this.state.error == 'no' ? "Please enter Url to generate short url" : "Error please enter a valid url"} value={this.state.url}/>
</div>
<div className="note">
    <p>Note : Url Will Not Work.</p>
</div>
</div>
);
}
}

export default Search;