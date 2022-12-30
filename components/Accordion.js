import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MuiAccordion(){
    return(
     <div>
        <Accordion>
            <AccordionSummary id="panel1-header" aria-controls="panel1-contnent" expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
            </AccordionDetails>
        </Accordion>
     </div>
    )
}