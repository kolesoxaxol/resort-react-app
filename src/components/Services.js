import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state = {
        services: [{
            icon: <FaCocktail />,
            title: 'free coctails',
            info: "lorem ipsum ipsum lorem"
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: "lorem ipsum ipsum lorem"
        },
        {
            icon: <FaShuttleVan />,
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
                <Title title="services" />
                <div className="servcies-center">
                    {this.state.services.map((item, index) => {
                    return(
                     <article key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>         
            </section >
        );
    }
}
