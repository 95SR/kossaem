import React from 'react'
import { RxEnter } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
            <div className="left">
              <div className="summary">
                <div className="dbBox">
                  <div className='dbBox-name'>Questions answered <span className='dbNumber'>9</span></div>
                  <div className="smallgraph">Graph</div>

                </div>

                <div className="dbBox">
                  <div className='dbBox-name'>Correct answer rate <span className='dbNumber'>80%</span></div>
                  <div className="smallgraph">Graph</div>

                </div>

                <div className="dbBox">
                  <div className='dbBox-name'>Attendance rate <span className='dbNumber'>100%</span></div>
                  <div className="smallgraph">Graph</div>

                </div>
              </div>

              <div className="graphContainer dbBox">
                p
              </div>
            </div>

            <div className="right">
              <div className="dbBox activeChat">
                <div className="title">
                  
                  <p>Available teacher</p>
                  <Link className="icon" to='/student/chat'>
                  
                  <RxEnter/>
                  
                  </Link>
                  
                 
                </div>

               

                <div className="chatProfile">
                  <div className="profPict-small"><span className='activeState'></span></div>
                  <div className="userName">Ssaem-1</div>
                  <div className="secondary-button">Say Hi</div>
                </div>
              </div>

            </div>
            
            
    </div>
  )
}

export default Dashboard
