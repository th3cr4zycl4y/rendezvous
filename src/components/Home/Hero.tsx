import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

// type Props = {}

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">

        <div className="intro">
          <h1>Ready to Rock? Discover the Hottest Events Here – Your Calendar's New Best Friend!</h1>
        </div>

        <form className="search">
          <div className="search-bar">
            <SearchIcon sx={{ fontSize: 20 }} />
            <input type="text" placeholder="Search for an events" />
          </div>
          <div className="divider"></div>
          <select name="category" >
            <option value="all">All</option>
            <option value="music">Comedy</option>
            <option value="sports">Religious</option>
            <option value="concerts">Tech</option>
            <option value="theatre">Health</option>
            <option value="festivals">Fitness</option>
            <option value="festivals">Sports</option>
            <option value="festivals">Education</option>

          </select>
          <Button color="primary" variant="contained" size="small" sx={{ textTransform: 'none', px: 4, mr: 4, py: 1 }} className="search-button">
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Hero