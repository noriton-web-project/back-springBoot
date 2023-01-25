import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";


const OutlineBox = styled(Box)({
    padding:"5%",
    paddingTop:'30px',
    border : '5px dashed gray',
    margin : "0 10%",
})

function Detail(){


const [book , setBook] = useState(
    {
        title : 'Book 1',
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        redDate : '2020-01-02',
        writer : 'Inhyuk'
    })

    return(
        <Box>
        <Typography variant="h2" sx={{m:5 , textAlign: 'center'}}>Detail Page</Typography>
        <OutlineBox>
            <Typography variant="h2" sx={{mb:1}}>{book.title}</Typography>
            <Typography variant="body2" sx={{ ml:'80%'}}>{book.writer}</Typography>
            <Typography variant="h6" sx={{mb:2 , mt:2}}>{book.content}</Typography>
            <Typography variant="body2">{book.redDate}</Typography>
        </OutlineBox>
        </Box>
    );
}

export default Detail;