import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;

    render() {
        // const {featuredRooms: rooms} = this.context;
        // console.log(rooms);
        return (
            <div>
                hellow from featured room 
                <Room />
                <Loading />
            </div>
        )
    }
}
