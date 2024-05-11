import { useState } from 'react'
import Dictaphone from './Dictaphone'
import clipboard_icon from './assets/clipboard_icon.png'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {
  
  const {
    transcript,
    listening,
    resetTranscript
  } = useSpeechRecognition();
  const copyToClipboard = () => {
    if(transcript == ""){
      alert("Nothing to copy");
      return
    }
    navigator.clipboard.writeText(transcript);
    alert("Copied to clipboard");
  }
  const reset = ()=>{
    resetTranscript();
    
    console.log("Reset function");
  }


  return (
    <div className='w-[80%] flex flex-col items-center gap-6'>
      <h1 className='text-5xl font-semibold text-center tracking-wider'>Speech to Text Converter</h1>
      <h2 className='text-lg text-center tracking-wider text-[rgb(96,101,123)]'>A React hook that converts speech from the microphone to text and makes it available to your React components.</h2>
      
      <div className='w-[800px] relative h-[400px] rounded-2xl shadow-2xl'>
      <img onClick={copyToClipboard} src={clipboard_icon} height={50} width={50} className='absolute right-0 top-0 hover:cursor-pointer' alt="" />
      <p className='absolute top-4 left-4'>Microphone: <span className={`font-bold capitalize text-[20px] ${listening == 'on'?'text-green-500':'text-red-500'}`}>{listening ? 'on' : 'off'}</span></p>
        <div id="displayBox" className='flex justify-center capitalize text-[24px]  items-center h-[340px]'>
          {transcript==""?"No Text ":transcript}
        </div>

        <div id="buttonBox" className='h-[60px] px-8 flex justify-between items-center pb-8'>
          <Dictaphone reset={reset} />
          {/* <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Copy To Clipboard</button>
          <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Start Listening</button>
          <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Stop Listening</button> */}
        </div>
      </div>
    </div>
  )
}

export default App
