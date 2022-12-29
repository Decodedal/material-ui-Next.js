import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import { Card } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <div className={styles.container}>
     <div>
       <span>With default Theme:</span>
     </div>
     <Switch {...label} defaultChecked />
     <Switch {...label} />
     <Switch {...label} disabled defaultChecked />
     <Card variant="outlined">"Card"</Card>
   </div>
 );
}