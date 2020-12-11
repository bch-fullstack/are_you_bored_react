import React, { Component } from 'react'
import Header from '../layout/Header'
import Row from '../layout/Row'
import './YesPage.css'
import { CATEGORIES } from '../../constants'
import Popup from '../layout/Popup'

export default class YesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: null
        }
    }

    updateContent = (content, category) => this.setState({ content, category })

    render() {
        return (
            <>
                <Header />
                <Popup content={this.state.content} category={this.state.category}/>
                
                {
                    Object.keys(CATEGORIES) // [books, news, movies, music]
                        .map((category, i) => <Row key={i}
                                            category={category} 
                                            subCategories={CATEGORIES[category]}
                                            updateContent={this.updateContent}/>)
                }
            </>
        )
    }
}
