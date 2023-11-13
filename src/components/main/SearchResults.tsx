import React from 'react';
import Information from '../../interfaces/Information';
interface Results {
  results: Information[];
}
export default class SearchResults extends React.Component<Results> {
  render() {
    return (
      <ul>
        {this.props.results.map((result) => {
          return (
            <li key={result.id}>
              {result.title}
              <br />
              {result.body}
            </li>
          );
        })}
      </ul>
    );
  }
}
