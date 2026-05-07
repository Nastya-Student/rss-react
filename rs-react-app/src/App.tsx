import './App.css';
import { Results } from './components/results/Results';
import React from 'react';
import { TopControls } from './components/top-controls/TopControls';
import { ErrorButton } from './components/ErrorButton';
import type { ResponseItem } from './api/interfaces/Response';

type AppState = {
  items: ResponseItem[];
};

type AppProps = object;

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [] };
  }

  handleItems = (items: ResponseItem[]) => {
    this.setState({ items: items });
  };

  render() {
    console.log(this.state.items);
    return (
      <main>
        <TopControls
          className="block"
          transferItems={this.handleItems}
        ></TopControls>
        <Results className="block" items={this.state.items}></Results>
        <ErrorButton>Error</ErrorButton>
      </main>
    );
  }
}
