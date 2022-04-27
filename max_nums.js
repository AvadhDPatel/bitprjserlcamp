// start coding your function here!
function find_max(arr)
{

    var maxn = 0;        //maximum number
  
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].a>maxn)
        {
        maxn = arr[i].a;
       }
    }
    return maxn; //returns the maximum number in an array.
}

exports.find_max = find_max;
