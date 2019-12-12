import React from 'react';
import Select from 'react-select'
import styled from 'styled-components';

import SpecTable from './spec-table';

import ProductCopy from './product-copy';
import { getBuildKits } from './api-client';

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
    const selectBoxOptions = this.state.buildKits.map(buildKit => (
      {
        value: buildKit.id, 
        label: buildKit.name
      }
    ));
    return (
      <Select 
      options={selectBoxOptions}
      onChange={(selectedOption => {
        this.setState({
          selectedBuildKit: selectedOption.value
        })
      })}
      />
    );
  }

  renderBuildKitDetails = () => {
    if (!this.state.selectedBuildKit) {
      return (
        <p>Select a build kit to see more details</p>
      )
    }

    const kit = this.state.buildKits.find(kit => kit.id === this.state.selectedBuildKit);

    return <SpecTable
      title={kit.name}
      items={kit.details}
    />
  }

  render = () => {
    const loader = (<div className='loader'>Loading...</div>)

    const headerImageSource = 'https://www.santacruzbicycles.com/files/styles/scb_natural_2000_auto/public/hero/my20_garage_ht_blue.jpg';
    return (
      <PageWrapper>
        <div>
          <h1>Tallboy</h1>
          <img src={headerImageSource} alt='tallboy'/>
          <div className='product-description'>
            {ProductCopy}
          </div>
        </div>
        <div>
          <h2>Build Kit Options</h2>
          {this.state.buildKitsLoading ? loader : (
            <>
              <SelectWrapper>{this.renderBuildKitSelector()}</SelectWrapper>
              <div>{this.renderBuildKitDetails()}</div>
            </>
          )}
        </div>
        </PageWrapper>
  )};
}

const PageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;

const SelectWrapper = styled.div`
  width: 200px;
`;