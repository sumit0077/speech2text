import React from 'react';
import 'regenerator-runtime/runtime';

import SpeechRecognition, { useSpeechRecognition , browserSupportsContinuousListening } from 'react-speech-recognition';

const Dictaphone = ({reset}) => {
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  // 
  //   SpeechRecognition.startListening({ continuous: true }) // for continuous listening
  // } 
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  
  return (
    <div id="buttonBox" className='h-[60px] px-8 flex justify-evenly w-full items-center pb-8'>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={SpeechRecognition.startListening()}>Start</button>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={reset}>Reset</button>
  
    </div>
  );
};
export default Dictaphone;