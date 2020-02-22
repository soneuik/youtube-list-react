import React from 'react';
import ReactDom from 'react-dom';


//내가 생성한 파일이라면, 실제 경로를 정확히 입력해줘야한다. 
import SearchBar from './components/search_bar';


const API_KEY ='AIzaSyA2TOMhvmvIik15ZaD9mS9NMa9owkciBWI'

//Create a new component, this component should produce some HTML

// var number === const number
// const is like 'final', which means it does not change. 
const App =() => { 
    return (
    <div>
        <SearchBar />
    </div>  
    // JSX that looks like HTML in javascript >> will be converted to vanilla javascript  
    );
} 





//Take this component's generated HTML
// and put it on the page ( in the DOM )
//render() means that component will be placed on pages.  
//render(component, tagert to place the component in .html)
ReactDom.render(<App />, document.querySelector('.container'));
 