
import "./Navbar.css"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

// import Logo from "../../assets/Logo.svg";
const Navbar = () => {
  return (
    <>
     <div className="row upperBar" style={{border:"1px solid grey"}}>
          <div className="col-4" style={{height:"8vh"}}><p style={{fontSize:"1.6rem", fontWeight:"600",marginLeft:"8%"}}>Payouts <small style={{fontSize:"1.1rem", fontWeight:"400",marginLeft:"5%"}}>How it works</small></p></div>
          <div className="col-4">
          <div style={{ display: 'flex', alignItems: 'center', marginTop:"2%" }}>
      {/* <SearchIcon style={{ marginRight: '8px' }} /> */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        placeholder="Search features, tutorial, etc."
        fullWidth
        InputProps={{
          startAdornment: (
            <SearchIcon style={{ marginRight: '8px', color: 'rgba(0, 0, 0, 0.54)' }} />
          ),
        }}
      />
    </div>
          </div>
          <div className="col-4"></div>
          <img className="col-1 imgclass" src=""alt="" />
         
        </div>
    </>
  )
}

export default Navbar