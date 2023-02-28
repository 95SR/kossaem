import React, {useState} from 'react'
import QuizPlay from './QuizPlay'
import Chat from './Chat'
import Record from './Record'
import Dashboard from './Dashboard'
import './Student.css'
import { IoIosNotificationsOutline, IoIosSettings } from "react-icons/io";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { RiChatSmile3Line} from "react-icons/ri";
import { ImFilesEmpty } from "react-icons/im";
import bg from './bg-2.png'
import { Link } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'

function HomeStudent() {
  const [active, setActive] = useState(0)
  const [questions,setQuestions] = useState([])



 


  return (
    <div className='studentContainer'>
        <nav>
          <ul>
            <li className='icon'><IoIosNotificationsOutline/> <span className='red-dot'></span></li>
            <li onClick={()=> setActive(0)}>Hi, Syahri</li>
            <li>Logout</li>
          </ul>
        </nav>

        <div className="main" style={{ backgroundImage: `url(${bg})` }}>
          <div className="sideMenu">
          <div className="profiles">
            <div className="profPict"></div>
            <div className="profile">
              <p className="username">Syahri-nim</p>
              <p className="point">1,000P</p>
            </div>
            <div className="icon"><IoIosSettings/></div>
          </div>

          <div className="menu">
            <div className={active === 1 ? "item active": "item"} onClick={()=>setActive(1)}><span className='icon'><HiOutlinePuzzlePiece/></span>
            Solve Quiz</div>

            <div className={active ===2? "item active": "item"} onClick={()=>setActive(2)}><span className='icon'><RiChatSmile3Line/></span>
            Practice Korean</div>

            <div className={active ===3? "item active": "item"} onClick={()=>setActive(3)}><span className='icon'><ImFilesEmpty/></span>
            My Record</div>


          </div>
          </div>

          <div className="body">
          {active === 1 
            ?
            <div className="bodyTitle">
            Quiz time!
          </div>
            
            :
            (active===2)
            ?
            <div className="bodyTitle">
            Practice your Korean with Native speaker
          </div>
            :
            (active===3)
            ?
            <div className="bodyTitle">
            My Study Record
          </div>
            :
            (active===0)
            ?
            <div className="bodyTitle">
            Welcome, <span className='orange-text'>Syahri</span>
          </div>
          :
          <div className="bodyTitle">
           Details
          </div>}


          

          <div className="bodyContent">

            {active === 1 
            ?
            <div className="content ">
            <QuizPlay/>
            </div>
            
            :
            (active===2)
            ?
            <div className="content ">
            <Chat/>
            </div>
            :
            (active===3)
            ?
            <div className="content ">
            <Record setActive={setActive} setQuestions={setQuestions}/>
            </div>
            :
            (active===0)
            ?
            <div className="content">
            <Dashboard/>
            </div>
            :
            <div className="content">
            <QuestionDetails questions={questions}/>
            </div>}
            
          </div>
          
          
          </div>
        </div>

        
      
    </div>
  )
}

export default HomeStudent
