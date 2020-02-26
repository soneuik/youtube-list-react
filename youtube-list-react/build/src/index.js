import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//내가 생성한 파일이라면, 실제 경로를 정확히 입력해줘야한다. 
import SearchBar from './components/search_bar';



const API_KEY ='AIzaSyC8W3ubcRCrLAeYElVmkUM4qmXa0I4Qb3w'  
//Create a new component, this component should produce some HTML 
// var number === const number
// const is like 'final', which means it does not change. 

// 함수형 App
// const App =() => { 
//     return (
//     <div>
//         <SearchBar />
//     </div>  
//     // JSX that looks like HTML in javascript >> will be converted to vanilla javascript  
//     );
// } 

//클래스형 App
class App extends Component{
    constructor(props){ 
        super(props); 

        //state안에서 videos라는 array정의해주기
        this.state ={ 
            videos: [],
            selectedVideo: null
         };


         //페이지 로드 되었을때 초기 비디오 검색 키워드.
        this.videoSearch('검정 말티푸');
    }


    //term은 유저가 검색하는 키워드
    videoSearch(term){
         //유투브 검색 함수에 api키랑, 검색용어 보내기. 
        //동영상 데이터 겟! 
        YTSearch ({key: API_KEY, term: term}, (videos) => {
            //this.setState({videos: videos}); 키와 변수이름이 같을때 위의 ({videos}); 처럼 표현 가능
            // Ajax로 데이터 보내줄때랑 비슷하게 보면됨.
            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
             });                
        });  
    }

    render(){ 
        // this.props // 클래스 함수에서 props는 어디서나 불러다 쓸수있다 


            
        const videoSearch=_.debounce((term) => {this.videoSearch(term)}, 300); 
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} /> 
                <VideoDetail video={this.state.selectedVideo} /> 
                {/* //props인 videos를 video_list component에 보내는것 */}
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    } 
}
 

//Take this component's generated HTML
// and put it on the page ( in the DOM )
//render() means that component will be placed on pages.  
//render(component, tagert to place the component in .html)
ReactDom.render(<App />, document.querySelector('.container'));
 