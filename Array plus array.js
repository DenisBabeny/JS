/*Array plus array
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/
function arrayPlusArray(arr1, arr2) {
    let resault1= 0;
    let resault2= 0;
    for ( let i = 0; i < arr1.length ; i++){
      resault1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++){
      resault2 += arr2[i];
    }
    return resault1 + resault2; //something went wrong
  }
