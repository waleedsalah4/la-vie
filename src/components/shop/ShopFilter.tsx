import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function ShopFilter() {
    const [categoryValue, setCategoryValue] = React.useState('plants');
    const [plantValue, setPlantValue] = React.useState('catctus');
    const [toolValue, setToolValue] = React.useState('irrigation');
    const [seedValue, setSeedValue] = React.useState('plants');

    const handleChangeCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryValue((event.target as HTMLInputElement).value);
    };
    const handleChangePlants = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlantValue((event.target as HTMLInputElement).value);
    };
    const handleChangeTools = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToolValue((event.target as HTMLInputElement).value);
    };
    const handleChangeSeeds = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeedValue((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <div className='sm:w-[20%]'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={categoryValue}
                                onChange={handleChangeCategories}
                            >
                                <FormControlLabel value="all Products" control={<Radio />} label="All Products" />
                                <FormControlLabel value="plants" control={<Radio />} label="Plants" />
                                <FormControlLabel value="tools" control={<Radio />} label="Tools" />
                                <FormControlLabel value="tools" control={<Radio />} label="Seeds" />
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Plants</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={plantValue}
                                onChange={handleChangePlants}
                            >
                                <FormControlLabel value="all Plants" control={<Radio />} label="All Plants" />
                                <FormControlLabel value="catctus" control={<Radio />} label="Cactus" />
                                <FormControlLabel value="palms" control={<Radio />} label="Palms" />
                                <FormControlLabel value="indoorPlants" control={<Radio />} label="indoor Plants" />
                                <FormControlLabel value="herbs" control={<Radio />} label="Herbs" />
                                <FormControlLabel value="ferns" control={<Radio />} label="Ferns" />
                                <FormControlLabel value="housePlants" control={<Radio />} label="House Plants" />
                                <FormControlLabel value="trees" control={<Radio />} label="Trees" />
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Tools</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={toolValue}
                                onChange={handleChangeTools}
                            >
                                <FormControlLabel value="all tools" control={<Radio />} label="All Plants" />
                                <FormControlLabel value="irrigation" control={<Radio />} label="Irrigation" />
                                <FormControlLabel value="storage" control={<Radio />} label="Storage" />
                                <FormControlLabel value="seeds" control={<Radio />} label="Seeds" />
                                <FormControlLabel value="Wheelbarrows " control={<Radio />} label="Wheelbarrows " />
                                <FormControlLabel value="Gardening Accessories" control={<Radio />} label="Gardening Accessories" />
                               
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Seeds</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={seedValue}
                                onChange={handleChangeSeeds}
                            >
                                <FormControlLabel value="all" control={<Radio />} label="All Products" />
                                <FormControlLabel value="plants" control={<Radio />} label="Plants" />
                                <FormControlLabel value="tools" control={<Radio />} label="Tools" />
                                <FormControlLabel value="Seeds" control={<Radio />} label="Seeds" />
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default ShopFilter