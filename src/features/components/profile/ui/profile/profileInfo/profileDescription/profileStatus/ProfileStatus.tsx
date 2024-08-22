import React, {ChangeEvent} from "react";
import {CustomInput} from "../../../../../../../../common/commonComponents/antdComponents/CustomInput";
import {SmallHeading} from "../../../../../../../../common/commonComponents/textElements/SmallHeading";
import {Caption} from "../../../../../../../../common/commonComponents/textElements/Caption";
import styled from "styled-components";

type Props = {
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
}

type State = {
    editMode: boolean;
    status: string;
}


const StatusContainer = styled.div`
    display: flex;
    gap: 10px;
    h4 {
        margin: 0;
    }
`;

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
            {!this.state.editMode && <StatusContainer onDoubleClick={this.activateModeHandler}>
                <SmallHeading text={'My status: '}/>
                <Caption text={this.props.status || 'no status'}/>
            </StatusContainer>}
            {this.state.editMode && <div>
                <CustomInput value={this.state.status}
                             onChange={this.onStatusChange}
                             onBlur={this.deactivateModeHandler}
                             autoFocus={true}/>
            </div>}
        </>;
    }
}
