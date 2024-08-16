import React, { ChangeEvent } from "react";

type Props = {
    status: string;
    updateStatus: (status: string) => void;
}

type State = {
    editMode: boolean;
    status: string;
}

export class ProfileStatus extends React.Component<Props, State> {

    state: State = {
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

    componentDidUpdate(prevProps: Props) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <>
            {!this.state.editMode && <div onDoubleClick={this.activateModeHandler}>
                <b>
                    My status: {this.props.status || 'no status'}
                </b>
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
