import React from 'react';
import WordsItem from './WordsItem';

class WordsItemList extends React.Component {
    render() {             
        const { imgs, desc, showDesc, rate } = this.props;    
        const imgList = imgs.map((img) =>            
            <WordsItem   
                key = {img.id}                 
                img = {img.img} 
                showDesc = {showDesc}                   
            />
        );       
        
        return (
            <div className="desc">
                <div>
                    {showDesc && <label>{desc + ' ' + rate}</label>}
                </div>
                <div>   
                    {imgList}
                </div>
            </div>            
        );
    }
}

export default WordsItemList;