import React, { Component } from 'react'
import GlassList from './GlassList'
import Model from './Model'
export default class QLSP extends Component {
    state = {
        GlassModel: {
            "id": 1,
            "price": 30,
            "name": 'GUCCI G8850U',
            "url": './img/v1.png',
            "desc": 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }
    mangSP = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ]
    ChangeGlass = (item) => {
        let glassUpdate = {
            "name": item.name,
            "url":item.url,
            "desc":item.desc,
            "id":item.id,
            "price":item.price
        }
        this.setState({
            GlassModel:glassUpdate
        })
    }
    render() {
        return (
            <div>
                <Model GlassOfModel={this.state.GlassModel} />
                <GlassList DSSP={this.mangSP} change={this.ChangeGlass} />
            </div>
        )
    }
}
