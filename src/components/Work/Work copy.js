import React from 'react'
import Header from '../Header/Header'
import temp from '../../resources/temp.jpeg'
import joyland from '../../resources/joylandtest.jpeg'
import './Work.css'
export default function Work() {
  return (
    <div>
      <Header current="work"></Header>
      <div className='project-container'>
        <div className='info' >
          <img src={temp} width={'100%'} height={'auto'}></img>
          <div className='project-title'>The Sound of Metal</div>
        </div>
        <div className='info'>
          <div className='info-text'>In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples.</div>
          <div className='info-text'>Director: John Thomas</div>
          <div className='info-text'>Writers: John Thomas, Jennie Black</div>
          <div className='info-text'>Cast: Adam Dan, Sally Seet, Will Wild, El Hall</div>
          <div className='info-text'>2020</div>
        </div>
      </div>
      <div className='project-container'>
        <div className='info'>
          <div className='info-text'>In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples.</div>
          <div className='info-text'>Director: John Thomas</div>
          <div className='info-text'>Writers: John Thomas, Jennie Black</div>
          <div className='info-text'>Cast: Adam Dan, Sally Seet, Will Wild, El Hall</div>
          <div className='info-text'>2020</div>
        </div>
        <div className='info' >
          <img src={joyland} width={'100%'} height={'auto'}></img>
          <div className='project-title'>Joyland</div>
        </div>
      </div>

      <div className='project-container'>
        <div className='info' >
          <img src={temp} width={'100%'} height={'auto'}></img>
          <div className='project-title'>The Sound of Metal</div>
        </div>
        <div className='info'>
          <div className='info-text'>In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples.</div>
          <div className='info-text'>Director: John Thomas</div>
          <div className='info-text'>Writers: John Thomas, Jennie Black</div>
          <div className='info-text'>Cast: Adam Dan, Sally Seet, Will Wild, El Hall</div>
          <div className='info-text'>2020</div>
        </div>
      </div>
      <div className='project-container'>
        <div className='info'>
          <div className='info-text'>In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples.</div>
          <div className='info-text'>Director: John Thomas</div>
          <div className='info-text'>Writers: John Thomas, Jennie Black</div>
          <div className='info-text'>Cast: Adam Dan, Sally Seet, Will Wild, El Hall</div>
          <div className='info-text'>2020</div>
        </div>
        <div className='info' >
          <img src={joyland} width={'100%'} height={'auto'}></img>
          <div className='project-title'>Joyland</div>
        </div>
      </div>
      
    </div>
  )
}
