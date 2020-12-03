import React, { Component } from 'react'
import NewdataP from './Newdata/NewdataP';
import Popular from './Popular/Popular';
import './products.css'

export default class Products extends Component {
    render() {
      return (
      <>
        <section>
            <div className="container">
                <div className="title-new mt-5">
                    <h3>New</h3>
                    <p className="lead text-muted">You've never seen it before</p>
                </div>
            </div>
        </section>

        <article>
            <div className="container">
                <div className="row d-flex flex-row justify-content-center mt-5">
                    <NewdataP />
                </div>
            </div>
        </article>

        <section>
            <div className="container">
                <div className="title-new mt-5">
                    <h3>Popular</h3>
                    <p className="lead text-muted">Find clothes that are trending recentyl</p>
                </div>
            </div>
        </section>

        <article>
            <div className="container">
                <div className="row d-flex flex-row justify-content-center">
                    <Popular />
                </div>
            </div>
        </article>
      </>
      )
    }
  }