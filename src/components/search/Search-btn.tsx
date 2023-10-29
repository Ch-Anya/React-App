import React from 'react'
import SearchInput from './Search-input.tsx'
interface SearchB {
    onClick: ()=> void
}
export default class SearchBtn extends React.Component<SearchB> {
    render() {
        return <input
        onClick={()=>this.props.onClick()}
        type="submit" 
        value="Search"/>
    }
}