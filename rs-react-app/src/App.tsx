import './App.css';
import { Results } from './components/results/Results';
import React from 'react';
import { TopControls } from './components/top-controls/TopControls';
import { ErrorButton } from './components/ErrorButton';
import type { ResponseItem } from './api/interfaces/Response';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './ErrorBoundary';
import { getItems } from './api/getItems';

type AppState = {
  items: ResponseItem[];
};

type AppProps = object;

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [] };
    const lastSearch = localStorage.getItem('last-search');
    if (lastSearch) {
      getItems(lastSearch).then((items) => this.handleItems(items));
    }
  }

  handleItems = (items: ResponseItem[]) => {
    this.setState({ items: items });
  };

  render() {
    return (
      <>
        <ErrorBoundary message="Something went wrong. Please, reload this page.">
          <Header></Header>
          <main>
            <TopControls
              className="block"
              transferItems={this.handleItems}
            ></TopControls>
            <Results
              className="block block-results"
              items={this.state.items}
            ></Results>
            <ErrorButton></ErrorButton>
          </main>
          <Footer></Footer>
        </ErrorBoundary>
      </>
    );
  }
}
