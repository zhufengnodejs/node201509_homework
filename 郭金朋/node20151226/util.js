
function  parent(){
   this.name="parent";
   this.say=function(){
       console.log("parent say...")
   }
}

function  child(){
    this.name="child";
    this.say=function(){
        console.log("child say...");
    }
}

new child().say();
