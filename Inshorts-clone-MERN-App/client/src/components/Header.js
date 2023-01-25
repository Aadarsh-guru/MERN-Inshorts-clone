import React from 'react'
import { Box } from '@mui/system';
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu } from '@mui/icons-material/';

const StyledHeader = styled(AppBar)`
background : #fff;
`
const MenuIcon = styled(Menu)`
color :#000;
`
const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

const Image = styled('img')({
    height:"55px",
    margin: "auto",
    paddingRight:"70px",
    
})


const Header = () => {
  return (
    <Box>
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo" srcset="" />
            </Toolbar>
        </StyledHeader>
    </Box>
  )
}

export default Header