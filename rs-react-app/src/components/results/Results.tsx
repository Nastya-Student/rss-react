import React from "react";
import { ResultList } from "./ResultsList";

type ResultsProps = {
  className: string;
}

export class Results extends React.Component <ResultsProps>{
  render () {
    return <div className={this.props.className}>
      <ResultList>Results</ResultList>
    </div>
  }
}