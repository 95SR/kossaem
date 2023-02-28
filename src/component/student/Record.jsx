import React from 'react'
import { AiOutlineSearch} from "react-icons/ai";
import './Record.css'

import data from "../share/data";
import Table from '../share/Table';

function Record({setActive, setQuestions}) {
  return (
    <div className='box1 record'>
      <div className="seacrh-boxContainer">
      <div className="search-box">
        
        <input placeholder='Search in category'></input>
        <div className="icon"><AiOutlineSearch/></div>
      </div>
      </div>

      <div className='recordBox'>
      <Table data={data} rowsPerPage={10} setActive={setActive} setQuestions={setQuestions}></Table>

      </div>

      
      

      

    </div>
  )
}

export default Record
