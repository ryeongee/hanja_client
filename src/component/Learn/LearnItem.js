import React from 'react';
import '../../style/Learn/LearnItem.css';

class LearnItem extends React.Component { 
    render() {
        return (
            <div className="desc">
                <div>
                    {this.props.showDesc && <label>{this.props.desc + ' ' + this.props.rate}</label>}
                </div>
                <div>   
                    {this.props.showDesc && <img src={this.props.img} alt=""></img>}                    
                </div>
            </div>
        );
    }
}

export default LearnItem;