import React from 'react'
import { connect } from 'react-redux';
import Actions from '../store/action'
import Logo from '../assets/images/logo.png'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({filterMobilePhones}) => {

    return (
        <ul>
            <li>
                <img src={Logo} alt="Zignaly Logo" style={{cursor: 'pointer'}}/>
            </li>
            <li style={{fontWeight: 600, fontSize: 24}}>
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    InputProps={{
                        endAdornment: <SearchIcon/>
                      }}
                    onChange={(e) => filterMobilePhones(e.target.value.toLowerCase()) }
                />
            </li>
        </ul>
    )

}

const mapDispatchToProps = dispatch => ({
    filterMobilePhones: (filter) => dispatch(Actions.filterMobilePhones(filter))
})

export default connect(null, mapDispatchToProps)(Navbar);

