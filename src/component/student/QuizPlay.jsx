import React, {useState} from 'react'
import './quiz.css'
function QuizPlay() {
  const [active, setActive] = useState('problem')
  const [result, setResult] = useState(true)

  return (
    <div className='box1'>
      {
        active === 'problem'
        ?
          <div className="quizProblem">
            <p className='instruction'> (<span className='space'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ) 에 들어갈 가장 알맞은 것을 고르십시오.</p>
            <div className="media">
              media
            </div>
            <div className="questionBox">운동장에서 (<span className='space'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ) 친구와 부딫혀서 넘어졌다.</div>
            <div className="answers questionBox">
              
              <form>
                <div className="option">
                <input type="radio" value='1' name="radAnswer"/>
                <label>축구할수록</label>
                </div>
                <div className="option">
                <input type="radio" value='2' name="radAnswer"/>
                <label>축구하던데</label>
                </div>
                <div className="option">
                <input type="radio" value='3' name="radAnswer"/>
                <label>축구하다가</label>
                </div>
                <div className="option">
                <input type="radio" value='4' name="radAnswer"/>
                <label>축구하려고</label>
                </div>
                
              </form>
            </div>

              <div className="secondary-button" onClick={()=> setActive('result')}>Submit</div>
          </div>
          :
          (active === 'result')
          ?
          <div className="quizResult">
            

              {result ?
              <div className="result">Correct!</div>
            :
            <div className="result">False</div>}

            <p className='light-text'>You earn <span className='orange-text'>2P</span></p>

              <div className="button-primary" onClick={()=> setActive('problem')}>
                Take another quiz
              </div>
            
          </div>
          :
          ""

      }
      

      
      

    </div>
  )
}

export default QuizPlay
