import { Grid } from '@mui/material'

import './header.scss'

export const Header = () => {
    return (
        <div className='header__wrapper main'>
            <Grid container className='header'>
                <Grid item xs={12}>
                    <nav>
                        <div className='logo-img'></div>
                        <ul>
                            <li><a href="#">Coffee house</a></li>
                            <li><a href="#">Our coffee</a></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </Grid>
            </Grid>
        </div>
    )
}