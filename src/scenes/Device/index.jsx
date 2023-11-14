import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const bull = (
 <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
 >
    •
 </Box>
);

const cardData = [
 {
    deviceName: 'Device 1',
    deviceLocation: 'Location 1',
    deviceIPAddress: '192.168.1.1',
 },
 {
    deviceName: 'Device 2',
    deviceLocation: 'Location 2',
    deviceIPAddress: '192.168.1.2',
 },
 {
    deviceName: 'Device 3',
    deviceLocation: 'Location 3',
    deviceIPAddress: '192.168.1.3',
 },
 {
    deviceName: 'Device 2',
    deviceLocation: 'Location 2',
    deviceIPAddress: '192.168.1.2',
 },
 // ya aru data liyera aunu parxa kta ho device add garesi mathi ko chai dummy data ho hai 
];

export default function BasicCard() {
 const [warning, setWarning] = React.useState(false);
 const [error, setError] = React.useState(false);

 React.useEffect(() => {
    // ya risad natra nobel le logic add garxan

    setWarning(false); 
    setError(false); 
 }, []);

 const getColor = () => {
    if (error) return 'error';
    if (warning) return 'warning';
    return 'success';
 };

 return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 2 }}>
        Connected Devices
      </Typography>
      {cardData.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
          }}
        >
          {cardData.map((data, index) => (
            <Card key={index} sx={{ minWidth: 175, bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 Device Details
                </Typography>
                <Typography variant="h5" component="div">
                 Device Name: {data.deviceName}
                </Typography>
                <Typography variant="h5" component="div">
                 Device Location: {data.deviceLocation}
                </Typography>
                <Typography variant="h5" component="div">
                 Device IP Address: {data.deviceIPAddress}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"   variant="contained" color={getColor()}>
                 Check Status
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 5 }}>
          No devices connected.
        </Typography>
      )}
    </Container>
 );
}