import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"
import './SwipeButtons.css'
const SwipeButtons = () => {
    return (
        <div className="swipeButtons ">
            <IconButton className="swipeButtons__repeat MuiIconButton-root">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left MuiIconButton-root">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star MuiIconButton-root">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right MuiIconButton-root">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning MuiIconButton-root">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
