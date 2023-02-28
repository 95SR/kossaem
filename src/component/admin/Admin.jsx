import React, {useState} from 'react'
import './Admin.css'
import { MdOutlinePlaylistAdd,MdOutlinePlaylistAddCheck } from "react-icons/md";
import bg from '../student/bg-2.png'
import AddQuiz from './AddQuiz';
import ListQuiz from './ListQuiz';
import QuestionDetails from '../student/QuestionDetails';
function Admin() {
    const [active, setActive] = useState(1)
    const [questions,setQuestions] = useState([])
  return (
    <div className='studentContainer admin'>
      <nav>
          <ul>
            <li>Hi, Admin</li>
            <li>Logout</li>
          </ul>
        </nav>

        <div className="main" style={{ backgroundImage: `url(${bg})` }}>
            <div className="sideMenu">
           

                <div className="menu">
                    <div className={active === 1 ? "item active": "item"} onClick={()=>setActive(1)}><span className='icon'><MdOutlinePlaylistAdd/></span>
                    Add Quiz</div>

                    <div className={active ===2? "item active": "item"} onClick={()=>setActive(2)}><span className='icon'><MdOutlinePlaylistAddCheck/></span>
                    Quiz List</div>
                </div>
            </div>

            <div className="body">
          {active === 1 
            ?
            <div className="bodyTitle">
            Add Quiz
          </div>
            
            :
            (active===2)
            ?
            <div className="bodyTitle">
            Quiz List
          </div>
            :
            ""}


          

          <div className="bodyContent">

            {active === 1 
            ?
            <div className="content ">
            <AddQuiz/>
            </div>
            
            :
            (active===2)
            ?
            <div className="content ">
            <ListQuiz setActive={setActive} setQuestions={setQuestions}/>
            </div>
            :
            (active===3)
            ?
            <div className='content '>
            <QuestionDetails questions={questions} setActive={setActive}/>
            </div>
            :
            ""}
            
          </div>
          
          
          </div>


        </div>
    </div>
  )
}

export default Admin
