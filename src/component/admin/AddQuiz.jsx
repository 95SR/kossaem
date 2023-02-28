import React, {useState,useRef,useEffect} from 'react'
import './Admin.css'
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
function AddQuiz() {
    const [input, setInput]= useState({
        question: '', 
        answer:'',
        category:'', 
        level:'', 
        mediaLink:''
    })

    const [options, setOptions] = useState([])
    const optionsRef = useRef() 

    const formHandler = (e)=> {
        const fieldName = e.target.name;

        setInput(prevValue => ({
            ...prevValue,
            [fieldName]:e.target.value,
            options:options

        }))
    }

   const addOption = () => {
    
    setOptions(prevValue => ([
        ...prevValue,optionsRef.current.value
    ]))

    
   }

   const handleClose = (idx) => {
    const newOptions = options.filter((item,index)=> index !== idx)
    
    setOptions(newOptions)

    
    
   }

   useEffect(()=> {
    optionsRef.current.value=''

   },[options])

   const submitHandler = async (e) => {
    e.preventDefault()
    console.log(input)
    
    setInput({
        question: '', 
        answer:'',
        category:'', 
        level:'', 
        mediaLink:''
    })

    setOptions([])
   }

   

  return (
    <div className='addQuiz'>
        <form>
            <div className="addQuestionContainer">
            <textarea name='question' placeholder='Add question'className='addQuestion' value={input.question} onChange={formHandler}>
            </textarea>
            </div>
            

            <div className="addAnswer">
                <div className="answerOption">
                    <input placeholder='Answer options'  ref={optionsRef}></input>
                    <div className="secondary-button" onClick={addOption}><AiOutlinePlus/></div>
                </div>

                <div className="optionList">
                    {options.map((item, idx)=> {
                        return(
                            <div className="item" key={idx}>{item}  <span className='closeBtn' onClick={(e)=>handleClose(idx)} ><AiOutlineCloseCircle/></span></div>        
                        )
                    })}
                    
                    
                </div>
            </div>

            <input type="text" placeholder='Correct Answer' name='answer' onChange={formHandler} value={input.answer}/>
            <input type="text" placeholder='Category' name='category' onChange={formHandler} value={input.category}/>
            <input type="text" placeholder='Level' name='level' onChange={formHandler} value={input.level}/>
            <div className="media" >
            <label>Add media</label>
            <input type="file" name='mediaLink' onChange={formHandler} />
            </div>
            

            <button className='button-primary' onClick={submitHandler}>Add</button>
            
        </form>
      
    </div>
  )
}

export default AddQuiz
