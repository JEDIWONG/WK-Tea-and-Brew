import { Box, Icon, Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import * as React from 'react';
import '../style/product_panel.css'
import allIcon from '../../../assets/icons/menu/all_icon.svg';
import coffeeIcon from '../../../assets/icons/menu/coffee_icon.svg';
import teaIcon from '../../../assets/icons/menu/tea_icon.svg';
import wineIcon from '../../../assets/icons/menu/wine_icon.svg';
import specialtyIcon from '../../../assets/icons/menu/specialty_icon.svg';
import ProductCard from "./ProductCard";
import expImg from "../../../assets/image/specialty_exp.jpg";

function IconImg(props){
    return(
        <>
            <img className="category-icon" src={props.icon}></img>
        </>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`product-tabpanel-${index}`}
        aria-labelledby={`product-tab-${index}`}
        {...other}
        >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `product-tab-${index}`,
        'aria-controls': `product-tabpanel-${index}`,
    };
}

function ProductPanel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%'}}>

            <Box sx={{ borderBottom: 0}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Product Cateogry Tabs"
                    role="Contents Display"
                    textColor=""
                    indicatorColor="gold"
                    sx={{color:"white",paddingBlock:"30px"}}
                    centered
                >
                    <Tab className="tab-btn all" icon={<IconImg icon={allIcon}/>} iconPosition="start" label="All" {...a11yProps(0)} />
                    <Tab className="tab-btn tab-coffee" icon={<IconImg icon={coffeeIcon}/>} iconPosition="start" label="Coffee" {...a11yProps(1)} />
                    <Tab className="tab-btn tab-tea" icon={<IconImg icon={teaIcon}/>} iconPosition="start" label="Tea" {...a11yProps(2)} />
                    <Tab className="tab-btn tab-wine" icon={<IconImg icon={wineIcon}/>} iconPosition="start" label="Wine" {...a11yProps(2)} />
                    <Tab className="tab-btn tab-specialty" icon={<IconImg icon={specialtyIcon}/>} iconPosition="start" label="Specialty" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>

                <div className="product-list-container">
                    <ProductCard imgUrl={expImg} title = "Example Product Name" desc="example desc long long long" price={12.00}/>
                    <ProductCard imgUrl={expImg} title = "Example Product Name" desc="example desc long long long" price={12.00}/>
                    <ProductCard imgUrl={expImg} title = "Example Product Name" desc="example desc long long long" price={12.00}/>
                    <ProductCard imgUrl={expImg} title = "Example Product Name" desc="example desc long long long" price={12.00}/>
                    <ProductCard imgUrl={expImg} title = "Example Product Name" desc="example desc long long long" price={12.00}/>
                </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
                Item 2
            </TabPanel>

            <TabPanel value={value} index={2}>
                Item 3
            </TabPanel>
            
        </Box>
    );
}

export default ProductPanel;