import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";
import type { ResponseItem } from "../../api/interfaces/Response";

type TopControlsProps = {
  className: string;
  transferItems: (items:ResponseItem [])=>void;
}

type TopControlState = {
  searchKey: string;
  items: string [];
}

export class TopControls extends React.Component <TopControlsProps, TopControlState>{

  constructor (props: TopControlsProps){
    super(props);
    this.state = {searchKey: localStorage.getItem('last-search') ?? '', items: []}
  }

  handleInputValue = (value: string): void => {
    this.setState({searchKey: value});
  } 

  handleGetItems = (items: ResponseItem []): void => {
    this.props.transferItems(items);
  }

  render () {
    return <div className={this.props.className}>
      <SearchInput id={"search-input"} type={"string"} placeholder={"choose smth"} initialValue={this.state.searchKey} onChange={this.handleInputValue}></SearchInput>
      <SearchButton searchKey={this.state.searchKey} onGetItems={this.handleGetItems}>Search</SearchButton>
    </div>
  }
}