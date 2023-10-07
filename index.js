var output = [] ;

function beerSong() {

    var i = 1 ;
    var int = 100 - i ;
    var decrement = int - 1 ;


    

    while (i < 101) {
            
        
        if( i >= 1 && i < 98 ) {
            output.push( int + " bottles of beer on the wall, " + int + " bottles of beer. Take one down and pass it around, " + decrement + " bottles of beer on the wall." ) ;
        }
        if (i === 98 ) {
            output.push( int + " bottles of beer on the wall, " + int + " bottles of beer. Take one down and pass it around, " + decrement + " bottle of beer on the wall." ) ;
        }
        if (i === 99) {
            output.push( int + " bottle of beer on the wall, " + int + " bottle of beer. Take one down and pass it around, " + " no more bottles of beer on the wall." ) ;
        }
        if (i=== 100) {
            output.push("No more bottles of beer on the wall, no more bottles of beer. Go to store and buy some more, 99 bottles of beer on the wall") ;
        }
        
        i++ ;
        
    }

    console.log(output) ;
}

