import React from 'react';
import Select from 'react-select'


import ProductCopy from './product-copy';
import { getBuildKits } from './build-kits-client';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buildKits: [],
      buildKitsLoading: true,
      selectedBuildKit: null // this will be the ID of the selected build kit.
    }
  }

  componentDidMount = async () => {
    const kits = await getBuildKits();
    this.setState({
      buildKitsLoading: false,
      buildKits: kits
    })
  }

  renderBuildKitSelector = () => {
    return (
      <Select 
      options={this.state.buildKits.map(buildKit => {
        return {value: buildKit.id, label: buildKit.name}
      })}
      onChange={(selectedOption => {
        console.log('changing to selected option', selectedOption)
        this.setState({
          selectedBuildKit: selectedOption.value
        })
      })}
      />
    );
  }

  showBuildKitDetails = () => {
    if (!this.state.selectedBuildKit) {
      return (
        <p>Select a build kit to see more details</p>
      )
    }

    const buildKit = this.state.buildKits.find(kit => kit.id === this.state.selectedBuildKit);
    console.log('showing build kit details with state', this.state);
    return (
      <>
        <div id='build-kit-info'>
          {`${buildKit.name}`}
        </div>
        <ul id='build-kit-details-list'>
          {buildKit.details.map(detail => {
            return <li key={detail.label} className='build-kit-list-item'>
              <div className='list-item-label'>{detail.label}</div><div className='list-item-value'>{detail.value}</div>
            </li>
          })}
        </ul>
      </>

    )
  }

  render = () => {
    const loader = (<div className='loader'>Loading...</div>)

    return (
      <div id='product-page'>
        <div id='product-info'>
          <h1 id='product-title'>Tallboy</h1>
          <img id='product-image' src='https://www.santacruzbicycles.com/files/styles/scb_crop_520_333/public/frame/thumbs/storm_thumb.jpg?itok=22cJJx21' alt='tallboy'/>
          <div className='product-description'>
            {ProductCopy}
          </div>
        </div>
        <div className='build-kits'>
          <h2 className='build-kits-header'>Build Kit Options</h2>
          {this.state.buildKitsLoading ? loader : (
            <>
              <div id='build-kit-selector'>{this.renderBuildKitSelector()}</div>
              <div id='build-kit-details'>{this.showBuildKitDetails()}</div>
            </>
          )}
        </div>
      </div>
  )};
}
