import { portfolioList } from '../data/DataPortfolio'; 
import '../styles/Portfolio.css'
function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>Portfolio</h3>
            <div className="grid">
              {
                portfolioList.map((item) => {
                  return (
                    <div className="item">
                      <a><img src={item.image} alt="" /></a>
                    </div>
                  )
                })
              }
                
            </div>
        </div>
    </section>
  )
}

export default Portfolio