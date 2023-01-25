import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";




function Modify(){

    const [title , setTitle] = useState("");
    const [text , setText] = useState("");
    const [content , setContent] = useState("");
    // const [writer , setWriter] = useState("");


    const onChange = (e) => {
        const {target} = e;
        if(target.id === "0") setTitle(target.value);
        else if(target.id === "1" ) setText(target.value);
        else if(target.id === "2") setContent(target.value);
    }

    const onCreate = (e) => {
        // create api
        setTitle("");
        setText("");
        setContent("");
    }
    const onModify = (e) => {

        //modify api
        setTitle("");
        setText("");
        setContent("");
    }


const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setText("");
    setContent("");
}

    return(
        <Box>
        <form onSubmit={onSubmit}>
            <input type="text" id="0" value={title} onChange={onChange} placeholder="title"></input> <br></br>
            <input type="text" id="1" value={text} onChange={onChange} placeholder="name"></input> <br></br>
            <textarea type="textarea" id="2" value={content} onChange={onChange} placeholder="content"></textarea>
            <input type="submit" value ="submit"></input>
            {/* <input type="submit" value ="submit"></input> */}
        </form>

            <Button onClick={onCreate}>create</Button>
            <Button onClick={onModify}>modify</Button>
        </Box>
        
    );
}

export default Modify;