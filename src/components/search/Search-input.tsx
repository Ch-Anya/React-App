import React from 'react'
interface Props {
    placeholder: string
}
export default class SearchInput extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state={
            name: 'test'
        }
    }
    render() {
        return (
            <input value='' placeholder={this.props.placeholder}/>
        )
    }
}