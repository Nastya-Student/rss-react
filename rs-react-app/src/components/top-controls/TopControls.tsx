import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

type TopControlsProps = {
  className: string;
}

export class TopControls extends React.Component <TopControlsProps>{
  render () {
    return <div className={this.props.className}>
      <SearchInput id={"search-input"} type={"string"} placeholder={"choose smth"}></SearchInput>
      <SearchButton>Search</SearchButton>
    </div>
  }
}