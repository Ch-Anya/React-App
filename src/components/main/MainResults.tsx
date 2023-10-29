import React from 'react';
import Information from '../../interfaces/Information.tsx';
interface State {
  error: string;
  isLoaded: boolean;
  items: Information[];
}
export default class MainResults extends React.Component {
  state: State = {
    error: '',
    isLoaded: false,
    items: [],
  };
  componentDidMount() {
    this.setState({ ...this.state, isLoaded: true });
    fetch('https://jsonplaceholder.typicode.com/users/8/posts')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          ...this.state,
          isLoaded: false,
          items: result,
        });
      })
      .catch((error) =>
        this.setState({
          ...this.state,
          isLoaded: false,
          error: error,
        })
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error</p>;
    } else if (isLoaded) {
      return <p>Загрузка</p>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title}
              <br />
              {item.body}
            </li>
          ))}
        </ul>
      );
    }
  }
}
