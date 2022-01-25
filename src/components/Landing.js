import React from 'react';
import { makeStyles } from '@mui/styles';
import MoralisIcon from '../assets/Moralis-Icon-Dark.png'
import MongoIcon from '../assets/mongologo.png'
import ReactIcon from '../assets/react-native-logo.png'

export default function Landing() {

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.headerNavbar}></div>
            <div className={classes.heroContainer}>
                <div className={classes.infoContainer}>
                    <h2 className={classes.headerTitle}>Hello World! I am Manbeartrain</h2>
                    <p className={classes.headerSubtext}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </p>
                    <button className={classes.hireButton}>Hire Me</button>
                </div>
                <div className={classes.infoContainer}>
                    <h2 className={classes.headerTitle}>Hello World! I am Manbeartrain</h2>
                </div>
            </div>
            <div className={classes.smallContainer}>
                <div className={classes.flexContainer}>
                    <div className={classes.techContainer}>
                        <div className={classes.tech}>
                            <img src={ReactIcon} className={classes.icon} />
                        </div>
                        <div className={classes.tech}>
                            <img src={MoralisIcon} className={classes.icon} />
                        </div>
                        <div className={classes.tech}>
                            <img src={MongoIcon} className={classes.icon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.heroContainer} style={{background: 'white'}}>
                <div className={classes.contentContainer}>
                    <div className={classes.servicesContainer}>
                        <div className={classes.service}></div>
                        <div className={classes.service}></div>
                        <div className={classes.service}></div>
                    </div>
                </div>
                <div className={classes.contentContainer}>
                    <div className={classes.servicesContainer} style={{background: 'white',}}>
                        <h2 className={classes.headerTitle}>My Awesome Services</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#e7f7fa',
    },
    servicesContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '85%',
        width: '80%',
        background: 'whitesmoke',
        borderRadius: 8,

    },
    service:{
        height: '30%',
        width: '95%',
        background: 'white',
    
        borderRadius:8,
    },
    heroContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    },
    smallContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        width: '100vw',
        background: 'white',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80vw',
    },
    headerNavbar: {
        position: 'fixed',
        top: 20,
        height: '10vh',
        width: '90vw',
        background: 'white',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.1)",
        borderRadius: 8,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '80%',
        width: '40%',
    },
    contentContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '80%',
        width: '40%',
    },
    headerTitle: {
        fontSize: 64
    },
    headerSubtext: {
        color: 'gray',
        marginTop: 25,
        fontSize: 18,
        fontWeight: '300',
        width: '80%',
    },
    hireButton: {
        padding: '12px 56px',
        background: 'tomato',
        border: 'none',
        color: 'white',
        fontSize: 18,
        borderRadius: 8,
        marginTop: 35,
    },
    subTitle: {
        fontSize: 28,
        fontWeight: '700',
    },
    techContainer: {
        display: 'flex',
    },
    tech: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 90,
        background: 'white',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.2)",
        borderRadius: 100,
        marginRight: 20,
        marginLeft: 20,
    },
    icon: {
        width: 50,
    },
})
