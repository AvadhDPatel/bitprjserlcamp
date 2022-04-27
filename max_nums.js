// start coding your function here!
function find_max(arr)
{
    maxn = -Infinity;
    
    for (item of arr){
        if (item > maxn){
            maxn = item
        }
    }
  
    return maxn; //returns the maximum number in an array.
}

exports.find_max = find_max;
