import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        let { glassess } = this.props
        return (
            <div className="col-2" key={this.props.key}
                onClick={() => {
                        this.props.changeGlass(glassess)
                }}
            >
                <img src={glassess.url}
                    style={{
                        width: 150,
                        // height: 100,
                        cursor:"pointer",
                    }}
                />
            </div>
        )
    }
}
