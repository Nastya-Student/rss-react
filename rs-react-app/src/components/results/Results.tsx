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
    // console.log('from results: ' + this.props.items)
    return <div className={this.props.className}>
      <ResultList items={this.props.items}>Results</ResultList>
    </div>
  }
}