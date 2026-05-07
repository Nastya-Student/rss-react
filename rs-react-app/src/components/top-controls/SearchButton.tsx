import React, { type ReactNode } from "react";
import { getItems } from "../../api/getItems";
import type { ResponseItem } from "../../api/interfaces/Response";

type SearchButtonProps = {
  children: ReactNode;
  searchKey: string;
  onGetItems: (items: ResponseItem[]) => void;
}



export class SearchButton extends React.Component <SearchButtonProps> {
  constructor (props: SearchButtonProps) {
    super (props);
  }

  onClickBtn = () =>{
    getItems(this.props.searchKey).then((items)=>this.props.onGetItems(items));
  }

  render () {
    return <button onClick={this.onClickBtn}>{this.props.children}</button>
  }
}