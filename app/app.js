import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/Header';
class App extends React.Component{
    render(){
        return(
             <div>
                <b>Congratulations</b>, You have successfully install project with webpack-dev-server
                <Header/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('content'));