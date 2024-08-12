import { Box, Container, List, ListItem, ListItemText } from '@mui/material';
import { colors } from '../../../../colors/colors';

const LecturesList = ({ lectures }) => {
    return (
        <Container maxWidth='1200px !important' sx={{paddingX:'16px !important', padding:'16px'}}>
            <Box sx={{ width: '100%',border:`1px solid ${colors.lightBlue}`, borderRadius:'10px' }}>
            <List>
                    <ListItem >
                        <ListItemText sx={{ display: 'flex', justifyContent: 'space-between', fontWeight:'bold' }}  primary={'ثمانيه محاضرات'} />
                        <ListItemText sx={{ display: 'flex', justifyContent: 'flex-end', fontWeight:'bold' }}  primary={'المحاضرات'} />
                    </ListItem>
            </List>
            <List sx={{ width: '100%' }}>
                {lectures.map((lecture, index) => (
                    <ListItem key={index} >
                        <ListItemText sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={lecture.time} />
                        <ListItemText sx={{ display: 'flex', justifyContent: 'flex-end' }} secondary={lecture.title} />
                    </ListItem>
                ))}
            </List>
            </Box>
        </Container>
    );
};

export default LecturesList;
