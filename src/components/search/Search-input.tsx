import React from 'react';
import SearchBtn from './Search-btn';
import Information from '../../interfaces/Information';
interface Props {
  placeholder: string;
}
interface State {
  results: string[];
  inputValue: string;
}
export default class SearchInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      results: [],
      inputValue: !localStorage.getItem('input')
        ? ''
        : JSON.parse(localStorage.getItem('input') || ''),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setLocalStorage();
    this.fetchInformation(this.state.inputValue);
  };
  fetchInformation = (value: string) => {
    fetch('https://jsonplaceholder.typicode.com/users/8/posts')
      .then((response) => response.json())
      .then((res) => {
        const results = res.filter((information: Information) => {
          return (
            value &&
            information &&
            information.title &&
            information.title.toLowerCase().includes(value)
          );
        });
        this.setState(results);
      });
  };
  setLocalStorage = () => {
    localStorage.setItem('input', JSON.stringify(this.state.inputValue));
    this.setState({
      inputValue: JSON.parse(localStorage.getItem('input') || ''),
    });
    console.log(this.state.inputValue);
  };
  render() {
    return (
      <>
        <input
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          defaultValue={this.state.inputValue}
          placeholder={this.props.placeholder}
        />
        <SearchBtn onClick={() => this.handleClick()} />
      </>
    );
  }
}
