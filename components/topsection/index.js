import Navbar from '../navbar'
import HeroSection from '../Herosection'
import HerobgSection from '../backgroundG'
import {Topsection} from './topsectionstyle'
import FeaturedBlog from '../featuredblog'




export default function MyApp () {
  return (
    <Topsection>
      <Navbar/>
      <HeroSection/>
      <FeaturedBlog/>
      <HerobgSection/>
    </Topsection>
  )
}

