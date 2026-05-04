import React, { type ReactNode } from "react";


type ResultListProps = {
  children: ReactNode;
  items: string[];
}

export class ResultList extends React.Component <ResultListProps>{
  constructor(props: ResultListProps){
    super(props);
  }


  render(){
    return <ul className="results-list">
            <h2>Results:</h2>
            <li className="list-item">
              <div>Name</div>
              <div>Description</div>
            </li>
            {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  }
}