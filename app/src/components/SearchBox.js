import styled from 'styled-components'
import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { IconSearch, IconLang } from './Icons'
import IconDocument from './IconDocument'
import Document from '../services/document'
import Language from './UI/ItemSideMenu/Language'
import RowItemDocument from './UI/ItemSideMenu/RowItemDocument'
import TextDocument from './UI/ItemSideMenu/TextDocument'
import NewItem from './UI/ItemSideMenu/NewItem'
import Icon from './UI/ItemSideMenu/Icon'

class SearchBox extends Component {
  state = {
    value: '',
    suggestions: []
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    const data = await this.getSuggestions(value)
    this.setState({
      suggestions: data
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  };

  getSuggestions = async (value) => {
    try {
      const inputValue = value.trim().toLowerCase()
      const result = await Document.search(inputValue)
      return result.data
    } catch(err) {
      // server error return empty  array
      console.log(err)
      return []
    }
  }
  
  getSuggestionValue = suggestion => suggestion.name

  openDocument(document) {
    window.location.href = `/content-viewer?menuId=${document.menuId}&document=${document.id}`
  }

  renderSuggestion = (suggestion) => (
    <RowItemDocument
      role='button'
      key={suggestion.id}
      onClick={e => this.openDocument(suggestion)}
    >
      <Icon>
        <IconDocument documentType={suggestion.documentType ? suggestion.documentType : suggestion.type} />
      </Icon>
      <TextDocument className='text'>{suggestion.name}</TextDocument>
      {
        suggestion.languages && suggestion.languages.length > 1 && (
        <Language>
          <IconLang />
        </Language>
)}
      { !suggestion.viewed && <NewItem /> }
    </RowItemDocument>
    )
  
  render(props) {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Consumables Safety Datasheets',
      value,
      onChange: this.onChange
    }

    return (
      <WrapperInputSearch>
        <Autosuggest
          id='result-search'
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <div className='search-icon'>
          <IconSearch />
        </div>
      </WrapperInputSearch>

    )
  }
}

const WrapperInputSearch = styled.div`
  display: flex;
  position: relative;

  input {
    font-size: 14px;
    border: none;
    width: 320px;
    color: ${props => props.theme.colorTextBody};
    padding-right: 15px;
  }

  #react-autowhatever-result-search {
    position: absolute;
    width: calc(100% + 15px);
    background-color: ${props => props.theme.colorWhite};
    border-left: 1px solid ${props => props.theme.colorBlue};
    top: 45px;
    right: -15px;
    z-index: 1000;
  }
`

export default SearchBox
