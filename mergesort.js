function merge(a, b){
  var tmp = new Array()
  var c = new Array(a.length + b.length);
  var ia = 0;
  var ib = 0;
  var ic = 0;
  while (ia < a.length && ib < b.length){
    if (a[ia] <= b[ib]){
      c[ic] = a[ia];
      ia++;
      ic++;
    }
    else{
      c[ic] = b[ib];
      ib++;
      ic++;
    }
  }
  while (ia < a.length){
    c[ic] = a[ia];
    ia++;
    ic++;
  }
  while (ib < b.length){
    c[ic] = b[ib];
    ib++;
    ic++;
  }
  return c;
}

function mergeSortAux(arr, n, low, high){
  if (high <= low){
    return arr;
  }
  // var n1 = floor(n / 2);
  // var n2 = n - n1;
  let m = floor((low + high) / 2);
  let n1 = m + 1;
  let n2 = n - n1;
  // var a = mergeSortAux(arr.splice(0, n1), n1, low, n1 - 1);
  let a = mergeSortAux(arr, n1, low, m);
  console.log(a);
  // var b = mergeSortAux(arr.splice(n1, n2), n2, n1, high);
  let b = mergeSortAux(arr, n2, m + 1, high);
  console.log(b);
  let c = merge(a, b);
  console.log(c);
  console.log("-------------------------");
  return c;
}

function mergeSort(arr){
  arr = mergeSortAux(arr, arr.length, 0, arr.length - 1)
}
