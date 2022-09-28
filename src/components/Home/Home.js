import React, {Component} from 'react';
import './Home.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

// image imports
import imgPFP from '../../assets/pfp-min.jpg'
import imgPodcast from '../../assets/podcast.jpg'

import art1 from '../../assets/art1.jpg'
import art2 from '../../assets/art2.jpg'
import art3 from '../../assets/art3.jpg'
import art4 from '../../assets/art4.jpg'
import art5 from '../../assets/art5.jpg'
import art6 from '../../assets/art6.jpg'
import art7 from '../../assets/art7.jpg'
import art8 from '../../assets/art8.jpg'
import art9 from '../../assets/art9.jpg'
import art10 from '../../assets/art10.jpg'
import art11 from '../../assets/art11.jpg'
import art12 from '../../assets/art12.jpg'
import art13 from '../../assets/art13.jpg'
import art14 from '../../assets/art14.jpg'

import vid1 from '../../assets/vid1.jpg'
import vid2 from '../../assets/vid2.jpg'
import vid3 from '../../assets/vid3.jpg'
import vid4 from '../../assets/vid4.jpg'

class Home extends Component {

    componentDidMount() {
        document.title = "Adwitiya Pal"
    }
    
    render() {

        return (
            <div className = "homeContainer">
                <div className = "headerContainer">
                    <img id="pfp" src={imgPFP}></img>
                    <h1>Hi, I'm Adwi</h1>
                    <p>Yo. Terrorize the jam like troops in Pakistan, swinging through your town like your neighborhood Spiderman. Life as a shorty shouldn't be so rough. One who just represent the Wu-Tang click with the game and soul, of an old school flick.</p>

                    <p>Slammin a hype verse til ya head burst. I come rough, tough like an Elephant tusk. I be that insane one from the psycho ward, I'm on the trigger, plus I got the Wu-Tang sword.</p>

                    <p>See what I'm doing <Link to="/now">now</Link> →</p>

                    {/* UPDATE SOCIAL LINKS HERE */}
                    <p>I'm also active on <a href="#" target="_blank" rel="noopener noreferrer">Unsplash</a> and <a href="https://twitter.com/adwipal" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>

                </div>
                <div className = "gridContainer">
                    {/* <h2>Selected works</h2> */}
                    <div className = "grid">
                        <h2>Articles</h2>
                        <Card 
                            title="A really unsafe space”: Are artists the victims in the wild west of the NFT world?"
                            desc="NFTs were supposed to make it easier for artists to have control over their work. But with countless accounts of scams, plagiarism and unfair treatment, has it done more harm than good?"
                            link="https://cardiffjournalism.co.uk/life360/a-really-unsafe-space-are-artists-the-victims-in-the-wild-west-of-the-nft-world/"
                            linkDesc="Cardiff Journalism"
                            img={art1}
                            alt="man on phone in front of frames"
                        />
                        <Card 
                            title="Par 59: Will Gareth Bale’s new golf bar in Cardiff be a hit or miss?"
                            desc="With the opening of Par 59 in Cardiff last Friday, Gareth Bale’s notorious “Wales. Golf. Madrid” slogan has officially become reality."
                            link="https://cardiffjournalism.co.uk/intercardiff/business-culture/par-59-will-gareth-bales-new-golf-bar-in-cardiff-be-a-hit-or-miss"
                            linkDesc="Cardiff Journalism"
                            img={art2}
                        />
                        <Card 
                            title="Cardiff’s congestion charge for non-residents could worsen traffic"
                            desc="Council’s plan to charge drivers entering the city will increase congestion and impact poor households the most, latest study finds."
                            link="https://cardiffjournalism.co.uk/intercardiff/politics-social-justice/cardiffs-congestion-charge-for-non-residents-could-worsen-traffic-in-the-city"
                            linkDesc="Cardiff Journalism"
                            img={art3}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art4}
                        />
                    </div>
                    <div className = "grid">
                        <h2>Podcast</h2>
                        <Card 
                            title="Strings Across the Seas"
                            desc="We speak to musicians who have found their passion in stringed instruments that are not well-known globally, but hold great significance in certain traditions, cultures and folklores."
                            link="https://open.spotify.com/show/083b8toVmWJC6ZjEvP5tXc"
                            linkDesc="Spotify"
                            img={imgPodcast}
                        />
                    </div>
                    <div className="grid">
                        <h2>Documentaries</h2>
                        <Card 
                            title="How is this vigil in London keeping the memories of the Tiananmen Massacre alive?"
                            desc="Desc this"
                            link="https://www.youtube.com/watch?v=cGDZR3ceJpc"
                            linkDesc="YouTube"
                            img={vid1}
                        />
                        <Card 
                            title="Cardiff Congestion Charge: What do people think about it?"
                            desc="Desc this"
                            link="https://www.youtube.com/watch?v=OQHKXeJ4KIk"
                            linkDesc="YouTube"
                            img={vid2}
                        />
                        <Card 
                            title="What do people in Cardiff think about mask-wearing?"
                            desc="Desc this"
                            link="https://www.youtube.com/watch?v=LCmxjBS6bzA"
                            linkDesc="YouTube"
                            img={vid3}
                        />
                        <Card 
                            title="A look at Gareth Bale's new golf bar in Cardiff"
                            desc="Desc this"
                            link="https://www.youtube.com/watch?v=qMOzOXvz6CA"
                            linkDesc="YouTube"
                            img={vid4}
                        />
                    </div>
                    <div className = "grid">
                        <h2>Read more</h2>
                        <Card 
                            title="World Wildlife Day: Meet the most endangered species in Wales"
                            desc="To mark World Wildlife Day, we look at some of the rare and endangered species in Wales and where you can find them."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/world-wildlife-day-meet-the-most-endangered-species-in-wales"
                            linkDesc="Cardiff Journalism"
                            img={art5}
                        />
                        <Card 
                            title="Par 59: Will Gareth Bale’s new golf bar in Cardiff be a hit or miss?"
                            desc="With the opening of Par 59 in Cardiff last Friday, Gareth Bale’s notorious “Wales. Golf. Madrid” slogan has officially become reality."
                            link="https://cardiffjournalism.co.uk/intercardiff/business-culture/par-59-will-gareth-bales-new-golf-bar-in-cardiff-be-a-hit-or-miss"
                            linkDesc="Cardiff Journalism"
                            img={art6}
                        />
                        <Card 
                            title="Cardiff’s congestion charge for non-residents could worsen traffic"
                            desc="Council’s plan to charge drivers entering the city will increase congestion and impact poor households the most, latest study finds."
                            link="https://cardiffjournalism.co.uk/intercardiff/politics-social-justice/cardiffs-congestion-charge-for-non-residents-could-worsen-traffic-in-the-city"
                            linkDesc="Cardiff Journalism"
                            img={art7}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art8}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art9}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art10}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art11}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art12}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art13}
                        />
                        <Card 
                            title="Nuclear plant mud disposal in the Severn raises concerns"
                            desc="Environmental groups are challenging the dumping of mud from the Hinkley nuclear plant in the Severn Estuary, amidst questions over its radioactivity."
                            link="https://cardiffjournalism.co.uk/intercardiff/science-environment/nuclear-plant-mud-dumping-in-the-severn-raises-concerns-amid-debate-over-its-radioactivity"
                            linkDesc="Cardiff Journalism"
                            img={art14}
                        />
                    </div>
                </div>
                <div className="footerContainer">
                    <p>This website does not track you. Have a nice day!</p>
                </div>
            </div>
        )
    }
}

export default Home;