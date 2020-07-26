let l = process.argv.slice(2);
let la = [];
l.map((el) => la.push(parseInt(el)));
let lb = [];
let algoUsed = [];
const sa = () => {
  [key1, key2] = la
  if(!key1 || !key2) return;
  let copie = {...la, 0 : key2, 1 : key1}
  la = Object.values(copie);
}

const sb = () => {
  [key1, key2] = lb;
  if(!key1 || !key2) return;
  let copie = {...lb, 0 : key2, 1 : key1}
  lb = Object.values(copie);
}

const sc = () => {
  sa(),
  sb()
}

const pa = () => {
  [key1] = lb
  if(!key1 !== null)
  {
    la.unshift(key1);
    lb.splice(0, 1);   
  }
}

const pb = () => {
  [key1] = la
  if(key1 !== null)
  {
    lb.unshift(key1);
    la.splice(0, 1);
  }
}

const rra = () => {
  la.unshift(la.pop());
}

const rrb = () => {
  lb.unshift(lb.pop());
}

const rrr = () => {
  rra();
  rrb();
}

const ra = () => {
  la.push(la.shift());
}

const rb = () => {
  lb.push(lb.shift());
}

const rr = () => {
  ra();
  rb();
}

const sort = () => {
  if(la.length > 1 || lb.length > 0)
  {
    let sorted = true;
    let half = la.length / 2
    const min = Math.min(...la)
    const max = Math.max(...la)
    let minPosition = null;
    let maxPosition = null;
    for(let i = 0; i < la.length; i++)
    {
      if(la[i] === min) minPosition = i;
      if(la[i] === max) maxPosition = i;
      if (la[i] > la[i+1]) {
        sorted = false;
      }
    }
    if(sorted && lb.length === 0)
    {
      // finis 
      if(algoUsed.length === 0) console.log("");
      else {
        console.log(...algoUsed);
      }
    }
    else if (la.length === 0)
    {
      let k = lb.length
      for(let j = 0; j < k; j++)
      {
        algoUsed.push('pa');
        pa();
      }
      console.log(...algoUsed);
    }
    else 
    {
      myAlgo(minPosition, maxPosition, half)
    }
  }
  else return console.log("");
}

const myAlgo = (minPosition, maxPosition, half) => {
  if(minPosition - half > 0)
  {
    //console.log('MIN more close to the end of the array')
    for(let i = minPosition; i !== la.length; i++)
    {
      algoUsed.push('rra');
      rra();
    }
    algoUsed.push('pb');
    pb();
    sort();
  }
  else
  {
      //console.log('MIN more close to the start of the array x ')
      for(let i = minPosition; i !== 0; i--)
      {
        algoUsed.push('ra');
        ra();
      }
      algoUsed.push('pb');
      pb();
      sort();
    }
  }
  
sort();