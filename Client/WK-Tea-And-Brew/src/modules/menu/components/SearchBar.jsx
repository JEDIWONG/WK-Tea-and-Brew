import "../style/searchbar.css"
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(){
    return(

        <>  
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                className="menu-search-bar"
            >

                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search For Products"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        </>
    )
}

export default SearchBar;