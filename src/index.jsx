import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const API_KEY = 'AIzaSyDDtZfmjlfEBm_K-29N8zkFKIwDCJxTInA';


class App extends Component {
    

    
    render(){
        
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        
        return (
        <div>
            hello
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));