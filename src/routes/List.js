import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, minWidth } from "@mui/system";
import React, { useState } from "react";


const StyledWriting = styled(Paper)({
    border: 0,
    borderRadius: 3,
    margin:"0 auto",
    borderColor:'black',
    padding:"30px",
    minWidth:'200px',
    height:'500px'

})

function List() {

    const [list , setList] = useState([
        {
            title : 'Book 1',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 2',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 3',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 4',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 5',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 6',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 7',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
        {
            title : 'Book 8',
            content : 'lorem sdnajdnajks nklwnjkdbajkdsn nakdnjkandawon al',
            redDate : '2020-01-02',
            writer : 'Inhyuk'
        },
    ]);

    return(
        <Grid container sx={{padding:10}}>

        {list.map( (element , index) => (
            <StyledWriting key={index} >
                <Box>
                    <Typography variant="h5">{element.title}</Typography>
                    <Typography variant="caption">{element.title}</Typography>
                </Box>
                <Typography variant="body2">{element.content}</Typography>
                <Typography variant="caption">{element.redDate}</Typography>
            </StyledWriting>
        ) )}
            
        </Grid>
    );

}

export default List;