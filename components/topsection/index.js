import Navbar from '../navbar'
import HeroSection from '../Herosection'
import HerobgSection from '../backgroundG'
import {Topsection} from './topsectionstyle'
import FeaturedBlog from '../featuredblog'
import FooterSection from '../footersection'
import WorkExp from '../workExp'




export default function MyApp () {
  return (
    <Topsection>
      <Navbar/>
      <HeroSection/>
      <FeaturedBlog/>
      <WorkExp/>
      <HerobgSection/>
      <FooterSection/>
    </Topsection>
  )
}

