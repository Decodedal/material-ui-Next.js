import { MuiBox } from "../components/box";
import styles from "../styles/Home.module.css";
import { Box, Stack, Grid } from "@mui/system";

export default function BoxPage(){
    return(
        <div className={styles.container}>
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
        </div>
    )
}