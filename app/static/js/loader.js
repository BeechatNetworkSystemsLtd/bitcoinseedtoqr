Pace.on('start', function(){
    // Show the loader when Pace starts
    document.getElementById('myLoader').style.display = "block";
});

Pace.on('done', function(){
    // Hide the loader when Pace is done
    document.getElementById('myLoader').style.display = "none";
});
