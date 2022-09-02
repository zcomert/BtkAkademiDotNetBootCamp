import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function SimpleFab({url}) {
    const navigate = useNavigate();

    const fabStyle = {
        position: "fixed",
        bottom: 16,
        right: 16,
      };
    
      const fab = {
        color: "error",
        sx: fabStyle,
        icon:  url?.endsWith("add") ? <AddIcon /> : <FormatListBulletedIcon />,
        label: "Add",
      };

  return (
    <div>
       <Fab
        onClick={() => navigate(url)}
        sx={fab.sx}
        color={fab.color}
        aria-label='add'
      >
        {fab.icon}
      </Fab>
    </div>
  )
}
