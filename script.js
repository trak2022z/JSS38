function homeworkProgress() {
  let status = "homework: not started";
  
  setTimeout(function() {
    console.log("Step 1: stare at it for a second");
    console.log("Step 2: check your phone");
    
    setTimeout(function() {
      console.log("Step 3: stare at it your hw once more");
      console.log("Step 4: sigh in exasperation");
      
      setTimeout(function() {
        console.log("Step 5: pick up your pencil");
        status = "give up";
        console.log("Homework status is: " + status);
      }, 2000);
    
    }, 4000);
  
  }, 1000);


}

homeworkProgress();