import { MuiBox } from "../components/box";
import styles from "../styles/Home.module.css";
import { Box, Stack } from "@mui/system";
import { Grid, Paper } from "@mui/material";

export default function BoxPage(){
    return(
        <div className={styles.container}>
            <Paper sx={{padding:'32px'}} elevation={4}>
            <Stack sx={{border:'1px solid'}} direction='row' spacing={2}>
          <Box sx={{
            bgcolor:"primary.main",
            color:"white",
            height:"100px",
            display:"flex",
            alignItems:'center',
            textAlign:"center",
            width:"100px",
            '&:hover':{
                backgroundColor:'primary.light',
            },
            boxShadow:10,
            typography:'body1'

          }}>Dallas box bay</Box>
          <Box bgcolor='primary.light' width="300px" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" boxShadow={5} typography='body2'>
            <p>second box</p>
            <ul>
                <li>list </li>
                <li>list</li>
                <li>lit</li>
            </ul>
            </Box>
            </Stack>
            <Grid container my={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>
                        item1
                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>
                        item2
                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>
                        item3
                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>
                        item4
                    </Box>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}