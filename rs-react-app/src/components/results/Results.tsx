import React from "react";
import { ResultList } from "./ResultsList";

type ResultsProps = {
  className: string;
  items: string[];
}

type ResultsState = {
  items: string[];
}

export class Results extends React.Component <ResultsProps, ResultsState>{
  constructor (props: ResultsProps){
    super(props);
    this.state = {items: props.items}
  }
  render () {
    return <div className={this.props.className}>
      <ResultList items={this.props.items}>Results</ResultList>
    </div>
  }
}