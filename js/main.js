var nim = (() => {




    var stateSpace = ()=>{
        var firstLayer = [];
        var size = 10;
        for(var i = 0; i < size;i++){
            var secondLayer = [];
            for(var j = 0; j < size-i; j++){
                var arr = new Int8Array(size-i-j);
                secondLayer.push(arr);
            }
            firstLayer.push(secondLayer);
        }
        return firstLayer;
    };

    var updateStateSpace = (stateSpace)=>{
        stateSpace[0][0][0] = 1;
        stateSpace[0][1][0] = 1;
    }
    var stateSp = stateSpace();
    updateStateSpace(stateSp);

    var findBestMidMove = (midArr)=>{
        var midBest = midArr.map(function(lastArr){
            var indexAndValueOfLastMaxValue = lastArr.reduce((iMax, x, i, arr) => {
                console.log("x", x);
                return (x > arr[iMax.index]) ? {index:i, value:x} : iMax;}, 
                {index:0, value:0});
            return indexAndValueOfLastMaxValue;
        })
        .sort((obj1, obj2)=>obj1.value < obj2.value)[0];
        console.log("midBest", midBest);
        // var indexOfLastMaxValue = lastArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
        return midBest;
    };

    
    var findBestLastMove = (lastArr)=>{
        var indexAndValueOfLastMaxValue = lastArr.reduce((iMax, x, i, arr) => {
            console.log("x", x);
            return (x > arr[iMax.index]) ? {index:i, value:x} : iMax;}, 
            {index:0, value:0});
        // var indexOfLastMaxValue = lastArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
        return indexAndValueOfLastMaxValue;
    };
    
    
    
    var isValidMove = (startArr, nextArr) =>{
        startArr.sort();
        nextArr.sort();
        var equalElements =  startArr.filter((val, index)=>{
            return val === nextArr[index];
        }); 


        return equalElements.length >= 2;
    }

    var move = arr => {
        if(arr[2] === 1){
            var bestMove = findBestLastMove(stateSp);
            return [2,2,bestMove];
        }
        if (arr[0] > 0) {
            return [arr[0] - 1].concat(arr.slice(1));
        }

    };

    //this is the nim struct
    return {
        move: move,
        findBestMidMove: findBestMidMove,
        findBestLastMove: findBestLastMove,
        isValidMove: isValidMove,
        stateSpace: stateSp
    };

})();
console.log(nim.stateSpace.length)

module.exports = nim;