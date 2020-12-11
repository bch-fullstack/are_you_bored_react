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

    updateContent = content => this.setState({ content })

    render() {
        return (
            <>
                <Header />
                <Popup content={this.state.content}/>
                
                {
                    Object.keys(CATEGORIES) // [books, news, movies, music]
                        .map(category => <Row 
                                            category={category} 
                                            subCategories={CATEGORIES[category]}
                                            updateContent={this.updateContent}/>)
                }
            </>
        )
    }
}
