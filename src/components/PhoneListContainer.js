import React from 'react'
import { useNavigate } from "react-router";
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloudOffIcon from '@mui/icons-material/CloudOff';
 

const PhoneListContainer = ({ mobilePhones }) => {

    const history = useNavigate()
    
    if (!mobilePhones) {
        //Loading component to display while waiting for the request
        return (
            <Box sx={{ width: '50%' }}>
                <LinearProgress />
            </Box>
        )
    }

    if (mobilePhones.errorMessage) {
        //Alert to display if error on making the request
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <CloudOffIcon sx={{fontSize: '35vh', color: "#5B48B4"}}/>
                <h1 className='connection-failed'>{mobilePhones.errorMessage}</h1>
            </div>
        )
    }

    return (
        <>
            {mobilePhones?.map(mobilePhone => (
                <Card className='card-container' key={mobilePhone.id}>
                    <CardContent className="card-content">
                        <div>
                            <img className='card-media' src={mobilePhone.image} alt={mobilePhone.name}/>
                        </div>
                        <p className='card-title'>{mobilePhone.name}</p>
                        <ul style={{padding: 0}}>
                            {mobilePhone.specifications?.map(specs => (
                                <>
                                    <li className='specifications-items'>{specs.camera}</li>
                                    <li className='specifications-items'>{specs.display}</li>
                                    <li className='specifications-items'>{specs.battery}</li>
                                </>
                            ))}
                        </ul>
                        <Button className='primary-button' variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={() => history(`/${mobilePhone.id}`)}>
                            Learn More
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        mobilePhones: state.mobilePhones
    };
}


export default connect(mapStateToProps,null)(PhoneListContainer);
