import React from 'react';


class SaveButton extends React.Component{
    state = {
        status: ''
    }
    handleonSave = () => {
        this.setState({
            status: 'saved'
        })
    }
    render(){
        return (
            <div><button onClick={this.handleonSave}>Save</button><span>{this.state.status}</span></div>
        )
    }
}



export default SaveButton;