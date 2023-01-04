import React from 'react';
import { google, dropbox, atlassian, shopify, slack } from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-div'>
        <img src={google} alt="google" />
        <img src={atlassian} alt="atlassian" />
        <img src={slack} alt="slack" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand;