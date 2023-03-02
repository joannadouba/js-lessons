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

