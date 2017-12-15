import React from 'react';
import ReactDOM from 'react-dom';
class Content extends React.Component{
    render(){
        return(
             <div>
                <b>Congratulations</b>, You have successfully install project with webpack-dev-server
            </div>
        )
    }
}
ReactDOM.render(<Content />, document.getElementById('content'));