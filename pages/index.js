import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import { Card } from "@mui/material";
import Muicard from "../components/Muicard";
import Responsive from "../components/responsive";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <div className={styles.container}>
     <div>
       <span>With default Theme:</span>
     </div>
     <Responsive/>
     <Switch {...label} defaultChecked />
     <Switch {...label} />
     <Switch {...label} disabled defaultChecked />
     <Muicard 
     width="20%"
     title='Dallas Rules' 
     body="Some words her that will look good displayed in a card for the world to see my nice well mangaed card layout." />
   </div>
 );
}