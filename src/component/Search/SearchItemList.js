import React from 'react';
import SearchItem from './SearchItem';

class SearchItemList extends React.Component {
    render() {
        const { hanjas } = this.props;
        const hanjaList = hanjas.map(
            ({id, level, img, correct, wrong}) => (
                <SearchItem
                    id = {id}
                    level = {level}
                    img = {img}
                    key = {id}
                    correct = {correct}
                    wrong = {wrong}
                />
            )
        );
        return (
            <div>
                {hanjaList}
            </div>
        );
    }
}

export default SearchItemList;