import React from 'react'
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


const PhoneDetailComponent = ({ mobilePhones }) => {

    const id = useParams().id
    const history = useNavigate()

    const mobilePhone = mobilePhones?.find(phone => phone.id === String(id))

    if(mobilePhone) {
        return (
            <Card className='card-container-details' sx={{ width: '60%', height:'60vh' }}>
                <CardContent className="card-content" sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start'
                }}>
                    <div className='card-media-details'>
                        <img src={mobilePhone?.image} alt={mobilePhone.name} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className='card-title' style={{ fontSize: 28 }}>{mobilePhone.name}</p>
                        <ul style={{ paddingLeft: 20, textAlign:'left' }}>
                            {mobilePhone.specifications?.map(specs => (
                                <>
                                    <li className='specifications-items'>{specs.camera}</li>
                                    <li className='specifications-items'>{specs.display}</li>
                                    <li className='specifications-items'>{specs.battery}</li>
                                </>
                            ))}
                        </ul>
                        <p className='specifications-items' style={{
                            textAlign:'justify',
                            paddingLeft: 20,
                            lineHeight: 2,
                            width: '80%'
                        }}>
                            {mobilePhone.description}
                        </p>
                        <div className='primary-button-details-container'>
                            <Button sx={{width:'20%', marginTop: '30px'}} className= "primary-button-details" variant="contained" endIcon={<HomeIcon />} onClick={() => history(`/`)}>
                                Go back
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        mobilePhones: state.mobilePhones
    }
}


export default connect(mapStateToProps, null)(PhoneDetailComponent);
