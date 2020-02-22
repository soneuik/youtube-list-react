import React, { Component } from 'react';
//const Component = React.Component;

  
//class 정의
//  1. class 이름 정의
//  2. extends Component
// 함수형 vs 클래스형 중 어떤것?
// 시작은 함수형으로 하되, 추가적인 기능을 더해야하면 클래스형을 선택 

class SearchBar extends Component { 
    //컴포넌트가 불릴때마다 call된다. 그래서 initializing개념이 여기서 발생된다. 
    // constructor()함수는 extends Component에서 온다. 
    constructor(props){ 

        //super를 호추하면서, Component의 함수를 가져올수있다.
        super(props); 

        //함수형 컴포넌트는 state를 가지지 않고, 클래스형 컴포넌트만 state를 가진다.
        //state is plain javascript object. 
        //constructor안에서만 =을 이용해서 이런식으로 state값을 변화시켜줄수있다.
        //constructor밖에서는 setState()를 이용해서 값을 바꿔줘야한다. 
        this.state = {term:''}; 
    }

    //render 함수 
    render() {
        return (
            <div>
                {/* onChange 통해서 state의 term이 업데이트 되고, 그럼 value에서 state의 term을 가져와서 업데이트한다
                1.onChange
                2.setState()
                3.value = this.state.term */}
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value}) } />
                {/* Value of the input: {this.state.term} */}
            </div> 
        );
        
    } 
    //이벤트핸들러. 타입, 클릭 등등 유저의 이벤트발생을 캐치해서 적용시키기
    //event = input 안에서 발생되는 값
    // onInputChange(event){
        // console.log(event.target.value);
    // }
}

export default SearchBar;
