import React, { ChangeEvent } from "react";

type StatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
}

type StateType = {
    editMode: boolean;
    status: string;
}

export class ProfileStatus extends React.Component<StatusPropsType, StateType> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateModeHandler = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateModeHandler = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: StatusPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <>
            {!this.state.editMode && <div onDoubleClick={this.activateModeHandler}>
                {this.props.status || 'user status'}
            </div>}
            {this.state.editMode && <div>
                <input value={this.state.status}
                       onChange={this.onStatusChange}
                       onBlur={this.deactivateModeHandler}
                       autoFocus={true} />
            </div>}
        </>;
    }
}
