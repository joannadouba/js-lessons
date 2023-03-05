*-----------------------------------------
        JS Advanced Topics: Objects Exercises
------------------------------------------ */

// Exercise 1: Stopwatch
// Write a Stopwatch object using the constructor function
// Stopwatch properties:
// - duration
// - reset()
// - start() - we shouldnt be able to call this twice in a row
// - stop - we shouldnt be able to call this twice in a row

const sw = new Stopwatch();
console.log(sw);

// My Solution:
function Stopwatch() {
    let duration = 0;
    let id;
    let stopped = false;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(){
            throw new Error('You may not set the duration yourself.')
        }
    })
    
    this.start = function(){
        if (duration !== 0)
            throw new Error('Stopwatch has already started');

        id = setInterval(function(){
            duration++;
            // return duration;
            this.duration = duration;
        }, 1000)   
    };
    
    this.stop = function() {
        if (stopped === true)
            throw new Error('Stopwatch has already stopped');
        
        stopped = true;
        clearInterval(id);
    };

    this.reset = function() {
        duration = 0;
    }

}

// Mosh's solution:
// Mosh's solution is simpler and more elegant because I am using the setInterval() function which will repeat the function calls until we stop it. 
// In Mosh's solution, we are using the Date() object, so we are storing 2 dates and comparing them. Not asking a function to repeat x number of times.
function Stopwatch1() { 
    let startTime, endTime, running, duration = 0;
  
    this.start = function() {
      if (running) 
        throw new Error('Stopwatch has already started.');
      
      running = true; 
  
      startTime = new Date();
    };
  
    this.stop = function() {
      if (!running) 
        throw new Error('Stopwatch is not started.');
  
      running = false; 
        
      endTime = new Date();
  
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds; 
    };
  
    this.reset = function() { 
      startTime = null;
      endTime = null;
      running = false; 
      duration = 0; 
    };
  
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    });
  }
  
/*-----------------------------------------
  JS Advanced Topics: Prototypes Exercise
------------------------------------------ */
// Exercise:
// Move the start, stop and reset to the prototype of the Stopwatch

// My Solution:
function Stopwatch() { 
    
    Object.defineProperty(this, 'startTime', {
        writable: true,
        value: 0
    })

    Object.defineProperty(this, 'endTime', {
        writable: true,
        value: 0
    })
    
    Object.defineProperty(this, 'running', {
        writable: true,
        value: false
    })

    Object.defineProperty(this, 'duration', {
        writable: true,
        value: 0
    })

  }


Stopwatch.prototype.start = function() {
    if (this.running) 
        throw new Error('Stopwatch has already started.');
  
    this.running = true; 
    this.startTime = new Date();
    console.log('startTime: ', this.startTime)
    console.log('Stopwatch started.')
}

Stopwatch.prototype.stop = function() {
    if (!this.running) 
        throw new Error('Stopwatch is not started.');
  
      this.running = false; 
        
      this.endTime = new Date();
  
      const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
      this.duration += seconds; 
      
      console.log('Stopwatch stopped')
      console.log(this.duration)
}

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false; 
    this.duration = 0; 
}

const sw = new Stopwatch();


// Mosh's Solution:
function MoshStopwatch() { 
    let startTime, endTime, duration, running = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; },
        set: function(value) { startTime = value;}
    })
    
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; },
        set: function(value) { endTime = value;}
    })
    
    Object.defineProperty(this, 'running', {
        get: function() { return running; },
        set: function(value) { running = value;}
    })
    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value;}
    })

  }


MoshStopwatch.prototype.start = function() {
    if (this.running) 
        throw new Error('Stopwatch has already started.');
  
    this.running = true; 
    this.startTime = new Date();
    console.log('startTime: ', this.startTime)
    console.log('Stopwatch started.')
}

MoshStopwatch.prototype.stop = function() {
    if (!this.running) 
        throw new Error('Stopwatch is not started.');
  
      this.running = false; 
        
      this.endTime = new Date();
      console.log(this.endTime);
  
      const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
      this.duration += seconds; 
      
      console.log('Stopwatch stopped')
      console.log(this.duration)
}

MoshStopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.duration = 0; 
    this.running = false; 
}

const sw1 = new MoshStopwatch();
