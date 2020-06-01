import React, { Component } from 'react'
import Title from './Title';
import { FaCoctail, FaHiking, FaShutleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state = {
        services: [{
            icon: <FaCoctail />,
            title: 'free coctails',
            info: "lorem ipsum ipsum lorem"
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: "lorem ipsum ipsum lorem"
        },
        {
            icon: <FaShutleVan />,
            title: 'Free shutlest',
            info: "lorem ipsum ipsum lorem"
        },
        {
            icon: <FaBeer />,
            title: 'Strogest Beer',
            info: "lorem ipsum ipsum lorem"
        }]
    };

    render() {
        return (
            <section classNmae="services">
                <div className="servcies-center">{this.state.services.map((item, index) => {
                    retrun <article key={index} className="service">
                    <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p></article>});
                </div>         
            </section >
        );
    }
}
