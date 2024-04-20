
import { Box, Typography, styled } from '@mui/material';
import CRUD from '../Assets/Images/CRUD.jpeg';
import CRU from '../Assets/Images/CRU.jpeg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Codeforinterview = () => {
    
    return (
        <Header>
            <Typography variant="h4">CRUD</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={CRU}  />
                <Image src={CRUD} />
            </Box>
        </Header>
    )
}

export default Codeforinterview;