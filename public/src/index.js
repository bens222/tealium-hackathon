$(document).ready(function() {
  $.getJSON('./src/data.json', function(vistorData) {
    const singleUser = vistorData.splice(0, 1);
    const singleUserAudience = singleUser[0].audiences.sort();
    const singleUserBadge = singleUser.badges;
    
    let visitorAudiences = [];
    for(let i = 0; i < vistorData.length; i++) {
      visitorAudiences.push({index: i, value: vistorData[i].audiences.sort()})
    }
    let capturedResult = [];
    for(let j = 0; j < visitorAudiences.length; j++) {
      if(singleUserAudience.join() === visitorAudiences[j].value.join()) {
        capturedResult.push(visitorAudiences[j])
      }
    }
    console.log('label:: ', capturedResult);
    
    // singleUserAudience.forEach((cur, i, arr) => {
    //   vistorData.forEach((current, index, array) => {
    //       if (cur[i] === current[index]) {
    //           string.splice(i, 1, unique[index])
    //       }
    //   })
    // })    
  })
})
