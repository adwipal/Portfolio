import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    
    render() {
        return (
            <a id="cardLink" href={this.props.link} target="_blank" rel="noopener noreferrer">
                <div className = "Card">
                    <img src={this.props.img} alt={this.props.alt}></img>
                    <div className = "content">
                        <h3>{this.props.title}</h3>
                        <p id="secondary">{this.props.desc}</p>
                        <p id="secondary">↗ {this.props.linkDesc}</p>
                    </div>
                </div>
            </a>
        )
    }

}

export default Card;