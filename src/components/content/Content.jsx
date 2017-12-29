import React, { Component } from 'react';
import ItemContent from './ItemContent'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
        };
    }

    renderList(){
        const list = this.state.list || [];
        return list.map(item =>(
            <table>
                <ItemContent />
            </table>
        ));
    }


    render() {
        return (
            <div className="content">
                {renderList()}
            </div>
        );
    }
}

