import React from 'react'
import '../App.css';

export default function News() {
  // const iframe = '<iframe width="100%" height="800" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';


  // function Iframe(props) {
  //   return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
  // }
  return (
    <div className='d-flex align-center marquee text-white mb-5'>
      <iframe
        id="ticker-news"
        title="ticker-news"
        width="100%"
        height="500"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true/"
        // src="https://intereconomia.com/ticker-news/"
      >
      </iframe>
      {/* <Iframe iframe={iframe} /> */}
    </div>
  )
}