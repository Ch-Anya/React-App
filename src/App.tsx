import React from 'react'
import SearchInput from './components/search/Search-input.tsx'
import SearchBtn from './components/search/Search-btn.tsx'
import MainResults from './components/main/MainResults.tsx'
export default class App extends React.Component {
  render() {
    return <>
    <SearchInput placeholder={'test'} />
    {/* <SearchBtn/> */}
    <MainResults/>
    </>
  }
}