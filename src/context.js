import React, { Component } from 'react'
import items from './data';


const RoomContext = React.createContext();
// <RoomContext.Provider value={}

export default class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    //get Data
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room=> room.featured == true);

        this.setState({

            rooms, featuredRooms, sortedRooms: rooms,
            loading: false
        });
    }

    formatData(ite) {
        let tempItems = items.map(item =>  {
            let id = item.sys.id;
            let images = item.fields.iamges.map(iamge => iamge.fileds.file.url);
            let room = {...item.fields, images, id};
            return room;
        })
    }

    render() {
        return (
            <div>
                <RoomContext.Provider value={{ ...this.state }} >
                    {this.props.children}
                </RoomContext.Provider>/>
            </div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
