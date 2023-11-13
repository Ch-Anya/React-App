import React from 'react';
interface SearchB {
  onClick: () => void;
}
export default class SearchBtn extends React.Component<SearchB> {
  render() {
    return (
      <input
        onClick={() => this.props.onClick()}
        type="submit"
        value="Search"
      />
    );
  }
}
