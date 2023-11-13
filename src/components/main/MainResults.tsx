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
    let fetchInformation = (value: string) => {
      this.setState({ ...this.state, isLoaded: true });
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
          this.setState({
            ...this.state,
            isLoaded: false,
            items: results,
          });
        });
    };
    if (!localStorage.getItem('input')) {
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
    } else {
      fetchInformation(JSON.parse(localStorage.getItem('input') || ''));
    }
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
