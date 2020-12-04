import React, { Component } from 'react'
import Header from '../layout/Header'
import Row from '../layout/Row'
import './YesPage.css'
import { config } from '../../constants'

export default class YesPage extends Component {
    render() {
        return (
            <>
                <Header />
                <Row title="Books" img={config.books}></Row>
                <Row title="Movies" img={config.movies}></Row>
                <Row title="Music" img={config.music}></Row>
                <Row title="News" img={config.news}></Row>
            </>
        )
    }
}
