import React, { useEffect, useState } from 'react';
import { AboutIntro, AboutIntroMobile } from '../../components/sections/About/AboutIntro';
import { MissionStory, MissionStoryMobile } from '../../components/sections/About/MissionStory';
import { MeetOurAgents, MeetOurAgentsMobile } from '../../components/sections/Agents/MeetOurAgents';
import { Stats, StatsMobile } from '../../components/sections/Stats';

function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= bp : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= bp);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [bp]);
  return isMobile;
}

const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <AboutIntroMobile /> : <AboutIntro />}
      {isMobile ? <StatsMobile /> : <Stats />}
      {isMobile ? <MissionStoryMobile /> : <MissionStory />}
      
      {isMobile ? <MeetOurAgentsMobile /> : <MeetOurAgents />}
    </>
  );
};

export default AboutUs;