import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AirIcon from '@mui/icons-material/Air';
import { Link } from "react-router-dom";


const contents = [{
    screenshot : "img/screenshot1.png",
    title: "혼란은 줄이고, 팀워크는 높이고",
    content: "팀원들을 Notion에 모으고 프로젝트와 문서를 함께 관리하세요. 협업이 쉬워지고 목표 달성이 빨라집니다.",
},
{
    screenshot : "img/screenshot2.png",
    title: "이거 뭐에 관한 거였지? 시간 낭비는 이제 그만",
    content: "업데이트되지 않는 위키, 여러 곳에 흩어진 문서는 시간 낭비의 주범이죠. Notion에서는 모든 업무 내용과 정보를 한데 관리하고 워크플로를 바로 파악할 수 있어요.",
},
{
    screenshot : "img/screenshot3.png",
    title: "유연한 워크플로 디자인",
    content: "내 업무 스타일에 맞게 Notion을 커스텀해 보세요. 드래그 & 드롭으로 대시보드, 웹사이트, 문서, 시스템을 간편하게 만들 수 있습니다.",
},
];

const NotionFreeButton = styled(Button)({
    backgroundColor: 'tomato',
    color: 'white',
    borderRadius:'5px',
    '&:hover': {
        backgroundColor: 'gray',
    },
    height:'30px'
})

const FirstTypo = styled(Typography)({
    fontWeight : 'bold',
})

const SecondTypo = styled(Typography)({
    color:'gray',
})

const TypoBox = styled(Box)({
    marginBottom : "20px"
})

const Image = styled(Box)({
    width:'50%',
    marginLeft:'100px',
    marginBottom: '50px',
    
})

const ImageList = styled(Box)({
    marginLeft: "20px",
    border: '3px dashed black', 
    borderColor:'lightGray'
})

const icons = [ <DeviceHubIcon sx={{fontSize:'50px' , color:'purple'}} /> ,<ScienceOutlinedIcon sx={{fontSize:'50px' , color: 'blue'}}/> , <AirIcon sx={{fontSize:'50px', color:'green'}}/>]

function Home(){

    return(
      <Grid container height="400px" sx={{padding:10 , paddingX:10}}>
        <Grid item md={6} xs={10}>
            <TypoBox >
                <FirstTypo variant="h2">모든 팀을 위한</FirstTypo>
                <FirstTypo variant="h2">하나의 워크스페이스</FirstTypo>
            </TypoBox>
            <TypoBox>
                <SecondTypo variant="body1">Notion은 단순한 워드프로세서가 아닙니다. </SecondTypo>
                <SecondTypo variant="body1">내 스타일에 맞게 커스텀해서 사용하세요.</SecondTypo>
            </TypoBox>
            <NotionFreeButton sx={{marginBottom:'20px'}}> Notion 무료 체험 </NotionFreeButton>
            <TypoBox>
                <SecondTypo variant="caption">Notion을 사용하는 파트너</SecondTypo>
            </TypoBox>
        </Grid>
        <Grid item md={6} xs={10}>
            <Image component="img" src="./img/p1.jpg"></Image>
        </Grid>
        {contents.map( (content , index) =>
        <Grid item xs={12} key={index}
        sx={{
            display: {md : 'flex' , xs:'block'} , 
            alignItems:'center',
            mx : { md: 5 , xs:0 } , my:7}}>
            <Box sx={{marginBottom:'20px', marginLeft:'auto'}}>
                {icons.at(index)}
                <Typography variant="h4" sx={{my:2}}>{content.title}</Typography>
                <Typography variant="body1" sx={{color:'gray'}}>{content.content}</Typography>   
            </Box>
            <ImageList component="img" src={content.screenshot} sx={{width: {md:"60%" , xs:'100%'}}} />
        </Grid>

        )}
      </Grid>
    );

}

export default Home;