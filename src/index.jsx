import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail.jsx';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDDtZfmjlfEBm_K-29N8zkFKIwDCJxTInA';


class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
            
        };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
        
    }
    
    render(){
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));