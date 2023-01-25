import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, minWidth } from "@mui/system";
import React, { useState } from "react";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { ColorLens } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledWriting = styled(Paper)({
    border: "3px solid lightgray",
    borderRadius: 3,
    // margin:"0 auto",
    margin:'50px auto',
    // borderColor:'black',
    // padding:"10px",
    minWidth:'200px',
    maxWidth:'300px',
    display:'flex',
    flexDirection:'column'
    

})

const ListTypoBox = styled(Paper)({
    display:'flex' , 
    alignItems:'center' , 
    justifyContent:'center',
    marginTop:"50px",
    backgroundColor:"tomato",
    boxShadow:'30',
    color:'white'
})

const ListTypo = styled(Typography)({
    color:'white',
    textAlign:'center',
})

function List() {

    const [list , setList] = useState([
        {
            title : 'Book 1',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 2',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 3',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 4',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 5',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 6',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 7',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 8',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
    ]);

    return(
        <Box>
            <ListTypoBox >
                <MenuBookOutlinedIcon  sx={{color: 'white' ,fontSize:'50px' , mx:3}}/>
                <Link to="../modify" style={{textDecoration:'inherit' , color:'inherit'}}><ListTypo variant="h3">Book List</ListTypo></Link>
                
            </ListTypoBox>
        <Grid container sx={{padding:6}}>

        {list.map( (element , index) => (
            <StyledWriting key={index} >
                
            <PushPinOutlinedIcon sx={{color:'gray' , fontSize:'50px' , position:'relative' ,left:'-5%' , top:'-7%'}}/>
                <Box sx={{px:4}}>
                    
                    <Typography variant="h5" sx={{mb:1}}>{element.title}</Typography>
                    <Typography variant="caption" sx={{ ml:'80%'}}>{element.writer}</Typography>
                    
                    <Typography variant="body2" sx={{mb:2 , mt:2}}>{element.content.length > 150 ? element.content.slice(0,150) + "..." : element.content }</Typography>
                    <Typography variant="caption">{element.redDate}</Typography>
                    
                </Box>
                <Box sx={{ marginTop:'auto' , textAlign : 'right' , p:4}}>
                        
                <Link to="../modify"><DriveFileRenameOutlineOutlinedIcon fontSize="large" sx={{color:'tomato'}}/></Link>
                        <DeleteOutlineIcon fontSize="large" sx={{color:'tomato'}}/>

                </Box>

                
            </StyledWriting>
        ) )}
            
        </Grid>
        </Box>
    );

}

export default List;