import React, { type ReactNode } from "react";
import type { ResponseItem } from "../../api/interfaces/Response";


type ResultListProps = {
  children: ReactNode;
  items: ResponseItem[];
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
            {this.props.items.map((item, index) => <li key={index} className="list-item">
              <div>
                 {item.name}
              </div>
             <div className="list-item-description">
                 {item.description.map((descriptionItem, index) => <div key={index} className="description-item">
                  {descriptionItem}
                 </div> )}
              </div>
              
              </li>)}
    </ul>
  }
}