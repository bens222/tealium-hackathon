$(document).ready(function() {
  $.getJSON('./src/data.json', function(vistorData) {
    const singleUser = vistorData.splice(0, 1);
    const singleUserAudience = singleUser[0].audiences.sort();
    const singleUserBadge = singleUser[0].badges.sort();
    
    // Audience logic
    let visitorAudiences = [];
    for(let i = 0; i < vistorData.length; i++) {
      visitorAudiences.push({index: i, value: vistorData[i].audiences.sort()})
    }
    let capturedAudiences = [];
    for(let j = 0; j < visitorAudiences.length; j++) {
      if(singleUserAudience.join() === visitorAudiences[j].value.join()) {
        capturedAudiences.push(visitorAudiences[j])
      }
    }
    console.log('label:: ', capturedAudiences);

    // badge logic
    let visitorBadges = [];
    for(let i = 0; i < vistorData.length; i++) {
      visitorBadges.push({index: i, value: vistorData[i].badges.sort()})
    }
    let capturedBadges = [];
    for(let j = 0; j < visitorBadges.length; j++) {
      if(singleUserBadge.join() === visitorBadges[j].value.join()) {
        capturedBadges.push(visitorBadges[j])
      }
    }
    console.log('label:: ', capturedBadges);
   
  })
})
