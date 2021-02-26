import React, { Component } from 'react'
import GlassItem from './GlassItem'

export default class GlassList extends Component {
    
  
    render() {
        let { DSSP } = this.props
        return (
            <div className="container bg-light">
                <div className="row">
                    {DSSP.map((item, index) => {
                        return <GlassItem glassess={item} key={index} changeGlass={this.props.change} />
                    })}
                </div>
            </div>
        )
    }
}
