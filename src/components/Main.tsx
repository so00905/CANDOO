import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Top from './Top';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

class Main extends React.Component {
    render() {
        return (
            <div>
                <Top/>
                <Container>
                    <Card sx={{ width: 275 }} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                여기서 자기란 누구인가?
                            </Typography>
                            <Typography variant="h5" component="div">
                                조{bull}용{bull}림
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                얘는 금천구산다.
                            </Typography>
                            <Typography variant="body2">
                                지금 일하고있다.
                                <br />
                                {'"화이팅"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Container>

            </div>
        );
    }
}

export default Main;
