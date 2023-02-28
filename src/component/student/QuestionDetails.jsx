import React from 'react'
import { AiOutlineEdit , AiOutlineDelete} from "react-icons/ai";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
function QuestionDetails({questions,setActive}) {
  return (
    <div className='box1 detailsContainer'>
        <div className="details">
<p className='subheader'> Question</p>
{questions.question}
<p className='subheader'> Options</p>
{questions.options}

<p className='subheader'> Answer</p>
{questions.answer}

<p className='subheader'> Category</p>
{questions.category}
<p className='subheader'> Level</p>
{questions.level}

<p className='subheader'> Media</p>
{questions.media}
        </div>

        <div className="operations">
          <p className='icon'><span ><AiOutlineEdit/></span>Edit</p>
          <p className='icon'><span ><AiOutlineDelete/></span>Delete</p>
          <p className='icon' onClick={()=> setActive(2)}><span className='icon md'><MdOutlinePlaylistAddCheck/></span>List</p>
        </div>
      
      
    </div>
  )
}

export default QuestionDetails
