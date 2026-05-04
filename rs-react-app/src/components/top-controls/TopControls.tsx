import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

type TopControlsProps = {
  className: string;
}

type TopControlState = {
  searchKey: string;
}

export class TopControls extends React.Component <TopControlsProps, TopControlState>{

  constructor (props: TopControlsProps){
    super(props);
    this.state = {searchKey: localStorage.getItem('last-search') ?? ''}
  }

  handleInputValue = (value: string): void => {
    this.setState({searchKey: value})
  } 

  render () {
    return <div className={this.props.className}>
      <SearchInput id={"search-input"} type={"string"} placeholder={"choose smth"} initialValue={this.state.searchKey} onChange={this.handleInputValue}></SearchInput>
      <SearchButton searchKey={this.state.searchKey}>Search</SearchButton>
    </div>
  }
}