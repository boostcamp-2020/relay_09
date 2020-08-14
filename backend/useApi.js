var sightengine = require('sightengine')('{{api_key}}', '{{secret_key}}');

sightengine.check(['nudity']).video_sync('https://ssh1997.github.io/test/test4.mp4').then(function(result) {
  // read the output (result)
    let data = result.data.frames
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