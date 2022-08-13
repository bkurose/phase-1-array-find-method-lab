// code your solution here
function superbowlWin(array){
    let win = array.find(element => element.result === 'W')
        return !!win ? win.year : undefined
}
