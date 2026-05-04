import React from "react";
import { ResultList } from "./ResultsList";

type ResultsProps = {
  className: string;
  items: string[];
}



export class Results extends React.Component <ResultsProps>{
  constructor (props: ResultsProps){
    super(props);
  }

  render () {
    return <div className={this.props.className}>
      <ResultList items={this.props.items}>Results</ResultList>
    </div>
  }
}