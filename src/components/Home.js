import React, {Component  } from "react";

export default class Home extends Component{
    render() {
        return(
            <section>
            <Nevbar />
            <div className= 'container'>
                <div className='row'>
                <div className='col s12 m3'>
                <Profile />
                </div>
                <div className='col s12 m9'>
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Portfolies />
                </div>
                </div>
            </div>
            </section>
        );
    }   
}