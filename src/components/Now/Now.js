import React, {Component} from 'react';
import './Now.css';
import { Link } from 'react-router-dom';

class About extends Component {

    componentDidMount() {
        document.title = "Now – Adwitiya"
    }
    
    render() {
        return (
            <div className = "Now">
                <h2>What I'm doing right now</h2>
                <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now</a> page. It's what I'm doing at this point in my life.</p>
                <ul class="dashed">
                    <li>Leave it up to me while I be livin' proof Small change, they putting shame in the game.</li>
                    <li>The rebel, I make more noise than heavy metal. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial.</li>
                    <li>Lyrically perform armed robbery, flee with the lottery, possibly they spotted me.</li>
                    {/* <li>Add here</li> */}
                </ul>
                <div class="Links">
                    <p>← <Link to="/">back</Link></p>
                </div>
            </div>
        )
    }
}

export default About;