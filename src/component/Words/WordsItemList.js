import React from 'react';
import WordsItem from './WordsItem';

class WordsItemList extends React.Component {
    render() {             
        const { imgs, desc, showDesc } = this.props;    
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
                    {showDesc && <label>{desc}</label>}
                </div>
                <div>   
                    {imgList}
                </div>
            </div>            
        );
    }
}

export default WordsItemList;