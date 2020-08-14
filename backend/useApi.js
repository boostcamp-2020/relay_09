var sightengine = require('sightengine')('1286476915', 'jhNZRwJE8VdmD27GquKM');

sightengine.check(['nudity']).video_sync('https://ssh1997.github.io/test/test4.mp4').then(function(result) {
  console.log(result)
  // read the output (result)
    let data = result.data.frames
    console.log(data)
    for (let i=0; i<data.length; i++){
        let obj_length = Object.keys(data[i].nudity).length
        if(data[i].nudity.raw > 0.6 || data[i].nudity.partial > 0.6 || obj_length === 4){
            console.log("true")
            return true
        }
    }
    console.log("false")
    return false
}).catch(function(err) {
  // handle the error
});