module.exports = function(arrayString){
    return arrayString.split(',').map(tech => tech.trim())
}