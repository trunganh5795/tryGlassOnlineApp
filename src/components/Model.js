import React, { Component } from 'react'

export default class Model extends Component {
   
    render() {
        let {GlassOfModel} = this.props
        return (

            <div className="row justify-content-around my-5 ">
                <div className="col-3 model modelWith">
                    <img src="./img/model.jpg"
                        // className="modelWith"
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        className="GlassModel"
                        src={GlassOfModel.url}
                        style={{
                            width:198
                        }}
                    />
                    <div className="detail text-left px-2">
                        <h3>{GlassOfModel.name}</h3>
                        <p>
                            {GlassOfModel.desc}
                        </p>
                    </div>
                </div>
                <div className="col-3 model">
                    <img src="./img/model.jpg"
                        style={{
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        )
    }
}
