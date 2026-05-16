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
  isLoading: boolean;
};

type AppProps = object;

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [], isLoading: false };
  }

  componentDidMount(): void {
    const lastSearch = localStorage.getItem('last-search');
    if (lastSearch) {
      this.setState({ isLoading: true });
      getItems(lastSearch).then((items) => this.handleItems(items, false));
    }
  }

  handleItems = (items: ResponseItem[], isLoading: boolean) => {
    this.setState({ items: items, isLoading: isLoading });
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
              isLoading={this.state.isLoading}
            ></Results>
            <ErrorButton></ErrorButton>
          </main>
          <Footer></Footer>
        </ErrorBoundary>
      </>
    );
  }
}
