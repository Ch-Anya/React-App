import React from 'react'
import SearchBtn from './Search-btn'
interface Props {
    placeholder: string
}
interface State {
    inputValue: string,
}
export default class SearchInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state={
            inputValue: !localStorage.getItem('input') ? '' 
            : JSON.parse(localStorage.getItem('input')||'')
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick=()=>{
        this.setLocalStorage()
    }
    setLocalStorage=()=>{
        localStorage.setItem('input', JSON.stringify(this.state.inputValue))
        this.setState({inputValue: JSON.parse(localStorage.getItem('input')||'')})
        console.log(this.state.inputValue);    
    }
    render() {
        return (<>
            <input
            onChange={(e)=>this.setState({inputValue: e.target.value})} 
            defaultValue={this.state.inputValue} 
            placeholder={this.props.placeholder}/>
            <SearchBtn onClick={()=>this.handleClick()}/>
            </>
        )
    }
}