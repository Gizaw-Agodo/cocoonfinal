import React from 'react'
import Menu from "../menu/Menu"
import SliderItem from '../slider/Slider';
import Video from '../video/Video';
import Contact from '../Contact';
function Home() {
  return (
    <div>
      <SliderItem />
      <Menu />
      <Video />
      <Contact/>
    </div>
  );
}

export default Home