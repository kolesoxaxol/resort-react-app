import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';


const Home = () => {
    return <React.Fragment><Hero hero="defaultHero">
        <Banner title="luxorius rooms" subtitle="deluxe rooms startign at $299">
            <Link to='/rooms' className="btn-primary" />
        </Banner>
    </Hero>
    <Services />
    <FeaturedRoom></FeaturedRoom>

    </React.Fragment>
}

export default Home;
