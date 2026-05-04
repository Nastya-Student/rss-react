import React, { type ReactNode } from "react";

type ResultListState = {
  items: string[];
}

type ResultListProps = {
  children: ReactNode;
  items: string[];
}

export class ResultList extends React.Component <ResultListProps, ResultListState>{
  constructor(props: ResultListProps){
    super(props);
    this.state = this.props;
  }


  render(){
    return <ul className="results-list">
            <h2>Results:</h2>
            <li className="list-item">
              <div>Name</div>
              <div>Description</div>
            </li>
            {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  }
}