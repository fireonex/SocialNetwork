import React from "react";

type StatusPropsType = {
    description: string
}

export class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false
    }

    activateModeHandler() {
        this.setState({
            editMode: true
        })
        //this.forceUpdate() //используется для принудительного обновления компонента
    }

    deactivateModeHandler() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode && <div onDoubleClick={this.activateModeHandler.bind(this)}>
                {this.props.description}
            </div>}
            {this.state.editMode && <div>
                <input value={this.props.description}
                       onBlur={this.deactivateModeHandler.bind(this)}
                       autoFocus={true}/>
            </div>}
        </>;
    }

}