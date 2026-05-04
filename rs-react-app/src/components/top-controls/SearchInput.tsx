import React, { type ChangeEvent } from "react";

type SearchInputProps = {
  id: string;
  type: "string";
  placeholder: string;
}

type SearchInputState = {
  value: string;
}

export class SearchInput extends React.Component<SearchInputProps, SearchInputState> {

  constructor(props:SearchInputProps){
    super(props);
    this.state = {
      value: localStorage.getItem('last-search') ?? ''
    }
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>):void => {
    this.setState({value: event.target.value})
    localStorage.setItem("last-search", event.target.value)
  }

  render () {
    return <input 
    id={this.props.id} 
    type={this.props.type}
    placeholder={this.props.placeholder} 
    value={this.state.value} 
    onChange={this.handleInput}>
    </input>
  }
}