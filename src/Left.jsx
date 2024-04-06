import React from "react";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Left=()=>{
    return(
        <>
            <ul>
                <li className="activex"><TipsAndUpdatesOutlinedIcon className="font_size"/></li>
                <li><NotificationsOutlinedIcon className="font_size"/></li>
                <li><CreateOutlinedIcon className="font_size"/></li>
                <li><ArchiveOutlinedIcon className="font_size"/></li>
                <li><DeleteOutlineOutlinedIcon className="font_size"/></li>
            </ul>
        </>
    )
}

export default Left;