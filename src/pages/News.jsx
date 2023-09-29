import React from 'react'
import '../App.css';

export default function News() {
  return (
    <div className='d-flex align-center marquee-news'>
      <iframe
        id="ticker-news"
        title="ticker-news"
        width="100%"
        height="auto"
        src="https://live-tickers-news.s3.eu-west-1.amazonaws.com/intereconomia.com_ticker-news_.html"
      >
      </iframe>
    </div>
  )
}