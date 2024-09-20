import { Button } from '@mui/material'

// type Props = {}

const DiscoverComponent = () => {
  return (
    <div className='discover'>
      <div className="container">

        <div className="title">
          <h2>Discover a World of Events Tailored Just for You.</h2>

          <Button color="primary" variant="contained" size="small" sx={{ textTransform: 'none', fontWeight: "bold", fontSize: 16, px: 4, py: 1 }}>
            View all events
          </Button>
        </div>
        <div className="discover-cards">

          <div className="discover-card card1">
            Online Events
          </div>
          <div className="discover-card card2">
            Physical Events
          </div>
          <div className="discover-card card3">
            Hybrid Events
          </div>
        </div>

      </div>
    </div>
  )
}

export default DiscoverComponent