import{at as X,aQ as p,aR as h,au as S,av as l,aw as y,aS as f}from"./index-238de57f.js";function w(){X();const n=new p;n.onAudioStart=function(t){console.log("playback started")},n.onAudioEnd=function(t){console.log("playback finished")};const a=h.fromSpeakerOutput(n),i=S.fromSubscription("XXXXXXXXXXXX","XXXXXXXXXXXX");i.speechSynthesisOutputFormat=l.Audio16Khz32KBitRateMonoMp3;const s=new y(i,a);async function c(t){try{const e=await new Promise((u,r)=>{s.speakTextAsync(t,o=>{o.reason===f.SynthesizingAudioCompleted?u(o):r(new Error(`Speech synthesis failed with reason: ${o.reason}`))},o=>{r(o)})});return console.log("Text-to-speech synthesis result:",e),e}catch(e){throw console.error("Error during text-to-speech synthesis:",e),e}finally{s.close()}}return{textToSpeech:c,getVoices:async()=>(await s.getVoicesAsync()).voices}}export{w as u};
