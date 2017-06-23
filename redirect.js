// alert('hi');
$(document).ready(function() {
    chrome.runtime.getURL('hackathon/FREELANCER.html');
    setTimeout(function(){
        window.location.href = 'https://edrichhans.github.io/staticfln';
    }, 5000);
    // setTimeout(function(){
    //     console.log('ready!')
    //     chrome.tabs.executeScript(null, {
    //         code: 'var config = ' + JSON.stringify(getKeywords)
    //     }, function() {
    //         chrome.tabs.executeScript(null, {file: 'custom.js'});
    //     });
    // }, 10000);
});