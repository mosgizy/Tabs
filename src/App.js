import { useEffect, useState } from 'react';
import './App.css';
import { experiences } from './experiences'
import Header from './Header';
import SideBtn from './SideBtn';
import Info from './Info';
import Impact from './Impact';

function App() {
  const [companyExpr, setCompanyExpr] = useState(experiences[0])
  const [isLoading, setIsLoading] = useState(1)
  const [isActive,setIsActive] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(0)
    }, 1000)
  }, [])

  const changeExpr = (id) => {
    setCompanyExpr(experiences[id - 1])
    setIsActive(id)
  }

  if (isLoading) {
    return <h1 className='loader'>loading...</h1>
  } else {
    return (
      <div className="container">
        <Header />
        <div className="content-wrapper">
          <div className="link-wrapper">
            {
              experiences.map((experience) => {
                return <SideBtn key={experience.id} name={experience.name} changeExpr={() => changeExpr(experience.id)} active = {isActive} id = {experience.id} />
              })
            }
          </div>
          <div className="info">
            <Info {...companyExpr} />
            <div className="impact">
              {
                companyExpr.jobs.map((job,index) => {
                  return <Impact key={index} impact={job} />
                })
              }
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className='btn'>more info</button>
        </div>
      </div>
    );
  }
}

export default App;
