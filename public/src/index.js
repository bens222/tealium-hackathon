$(document).ready(function() {
  $.getJSON('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1000', function(visitorData) {
    const singleUser = visitorData.splice(0, 1);
    const singleUserAudience = singleUser[0].audiences.sort();
    const singleUserBadge = singleUser[0].badges.sort();
    
    let visitorAudiences = [];
    for(let i = 0; i < visitorData.length; i++) {
      visitorAudiences.push({index: i, value: visitorData[i].audiences.sort()})
    }
    let capturedAudiences = [];
    for(let j = 0; j < visitorAudiences.length; j++) {
      if(singleUserAudience.join() === visitorAudiences[j].value.join()) {
        capturedAudiences.push(visitorAudiences[j])
      }
    }
    
    let visitorBadges = [];
    for(let i = 0; i < visitorData.length; i++) {
      visitorBadges.push({index: i, value: visitorData[i].badges.sort()})
    }
    let capturedBadges = [];
    for(let j = 0; j < visitorBadges.length; j++) {
      if(singleUserBadge.join() === visitorBadges[j].value.join()) {
        capturedBadges.push(visitorBadges[j])
      }
    }
    
    let userAudiencesTotal = capturedAudiences.length;
    let userBadgeTotal = capturedBadges.length;
    let usersTotal = visitorData.length;
    
    let userAudienceAverage = (userAudiencesTotal / usersTotal) * 100;
    let userBadgeAverage = (userBadgeTotal  / usersTotal) * 100;

    var trace1 = {
      x: ['Percentage of Visitors with Same Audiences', 'Percentage of Visitors with Same Badges'],
      y: [userAudienceAverage, userBadgeAverage],
      name: 'Individual User',
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var data = [trace1];
    var layout = {
      title: 'Average Visitors Belonging to Audience',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Total',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('averageAudience', data, layout, {showSendToCloud:true});

    // Average Badges Chart
    var trace1 = {
      x: ['Discount Buyer', 'Fan','Returning Customer','Trend Follower','Coupon Lover','Repeated Buyer'],
      y: [7, 6, 9, 13, 6, 2],
      name: 'Individual User',
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Discount Buyer', 'Fan','Returning Customer','Trend Follower','Coupon Lover','Repeated Buyer'],
      y: [25, 30, 29, 12, 17, 19], 
      name: 'Multiple User\'s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Badges Acquired',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Total',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('badgesChart', data, layout, {showSendToCloud:true});

    // Average Audience Chart
    var trace1 = {
      x: ['Big Spender', 'Frequent Visitor','VIP','Loyal Shopper','Window Shopper','Discount Shopper', 'Low Budget'],
      y: [7, 6, 9, 13, 6, 2],
      name: 'Individual User',
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Big Spender', 'Frequent Visitor','VIP','Loyal Shopper','Window Shopper','Discount Shopper', 'Low Budget'],
      y: [25, 30, 29, 12, 17, 19], 
      name: 'Multiple User\'s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Consumer Audience',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Total',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('audienceChart', data, layout, {showSendToCloud:true});

    // Average Value Chart
    var trace1 = {
      x: ['Purchase Value', 'Value Per Visit'],
      y: [95, 55.75],
      name: 'Individual User', 
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Purchase Value', 'Value Per Visit'],
      y: [125, 64.75], 
      name: 'Multiple User\s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Value',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'US Dollars',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group', 
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('valueChart', data, layout, {showSendToCloud:true});

    // Average Time Spent Chart
    var trace1 = {
      x: ['Over 10', 'Over 20', 'Over 30'],
      y: [7, 6, 9,],
      name: 'Individual User', 
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Over 10', 'Over 20', 'Over 30'],
      y: [25, 30, 29], 
      name: 'Multiple User\'s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Time Spent On Website',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Minutes',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('timeChart', data, layout, {showSendToCloud:true});

    // Average Device Used Chart
    var trace1 = {
      x: ['Laptop/Desktop', 'Cell Phone', 'Tablet'],
      y: [7, 6, 9,],
      name: 'Individual User', 
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Laptop/Desktop', 'Cell Phone', 'Tablet'],
      y: [25, 30, 29], 
      name: 'Multiple User\'s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Device Used',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Total',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('deviceChart', data, layout, {showSendToCloud:true});



    //Browser Chart
    var trace1 = {
      x: ['Google Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'],
      y: [7, 6, 9, 13, 6, 2],
      name: 'Individual User',
      marker: {color: 'rgb(26, 118, 255)'},   
      type: 'bar'
    };

    var trace2 = {
      x: ['Google Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'],
      y: [25, 30, 29, 12, 17, 19], 
      name: 'Multiple User\'s', 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar'
    };

    var data = [trace1, trace2];
    var layout = {
      title: 'Average Browser Used',
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
      }}, 
      yaxis: {
      title: 'Total',
      titlefont: {
      size: 16, 
      color: 'rgb(107, 107, 107)'
      }, 
      tickfont: {
      size: 14, 
      color: "rgb(107, 107, 107)"
      }
      }, 
      legend: {
      x: 0, 
      y: 1.0, 
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
      }, 
      barmode: 'group',
      bargap: 0.15, 
      bargroupgap: 0.1
    };
    Plotly.newPlot('browserChart', data, layout, {showSendToCloud:true});
    
  })
})
