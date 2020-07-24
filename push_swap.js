let l = process.argv.slice(2);
let la = [];
l.map((el) => la.push(parseInt(el)));
// let lz = [];
// l.map((el) => lz.push(parseInt(el)));
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
  if(key1 !== null) return;
  la.unshift(key1);
  lb.splice(0, 1);
}

const pb = () => {
  [key1] = la
  if(key1 !== null) return;
  lb.unshift(key1);
  la.splice(0, 1);
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
      console.log('sorted')
    }
    else if (la.length === 0)
    {
      let k = lb.length
      for(let j = 0; j < k; j++)
      {
        pa();
        console.log('j=> ', j)
        console.log('lb.length => ', lb.length)
      }
      console.log('A sorted => ', la)
    }
    else 
    {
      myAlgo(minPosition, maxPosition, half)
    }
  }
  else return;
}

const myAlgo = (minPosition, maxPosition, half) => {
  if(minPosition - half > 0 && maxPosition - half > 0 && minPosition - half > maxPosition - half)
  {
    // Le plus petit numéro est le plus proche de la fin de l'array est le plus gros numéro est plus proche du millieu
    console.log('MIN more close to the end of the array')
    console.log(la)
    for(let i = minPosition; i !== la.length; i++)
    {
      rra();
    }
    pb();
    sort();
  }
  // else if(minPosition - half > 0 && maxPosition - half > 0 && maxPosition - half > minPosition - half)
  // {
  //   // Le plus gros numéro est le plus proche de la fin de l'array est le plus petit numéro est plus proche du millieu

  //   console.log('MAX more close to the end of the array #1')
  //   if(maxPosition === la.length - 1)
  //   {
  //     console.log('au bout')
  //   } else {
  //     console.log('ifelseifelse')

  //     // for(let i = maxPosition; i < la.length; i++)
  //     // {
  //     //   rra();
  //     // }
  //     // sort();
  //   }
  // }
  else
  {
    if(minPosition - half < 0 && maxPosition - half < 0 && minPosition - half < maxPosition - half)
    {
      // Le plus petit numéro est le plus proche du début de l'array est le plus gros numéro est plus proche du millieu
      console.log('MIN more close to the start of the array x ')
      console.log(minPosition)
      for(let m = minPosition; m !== 0; m--)
      {
        console.log('tes')
        ra();
      }
      pb();
      sort();
    }
    // else if(minPosition - half < 0 && maxPosition - half < 0 && maxPosition - half < minPosition - half)
    // {
    //   // Le plus gros numéro est le plus proche du début de l'array est le plus gros numéro est plus proche du millieu
    //   console.log('MAX more close to the start of the array')
    // }
    else
    {
      if(minPosition - half < 0 && minPosition < la.length - maxPosition)
      {
        // Le plus petit numéro est le plus proche du début de l'array est le plus gros numéro est plus proche du millieu
        console.log('MIN more close to the start of the array than MAX')
        console.log(la)
        for(let i = minPosition; i !== 0; i--)
        {
          ra();
        }
        pb();
        sort();
      }
      // else if(maxPosition - half < 0 && maxPosition < la.length - minPosition)
      // {
      //   // Le plus gros numéro est le plus proche du début de l'array est le plus gros numéro est plus proche du millieu
      //   console.log('MAX more close to the start of the array than MIN')
      // }
      else
      { 
        console.log('MIN more close to the end of the array than MAX lastif')  
        for(let i = minPosition; i !== la.length; i++)
        {
          rra();
        }
        pb();
        sort();
        // console.log('entry')  
        // if(maxPosition - half < 0 && maxPosition <= la.length - minPosition)
        // {
        //   // Le plus petit numéro est le plus proche de la fin de l'array est le plus gros numéro est plus proche du millieu
        //   console.log('MIN more close to the end of the array than MAX lastif')
        // }
        // else if(minPosition - half < 0 && minPosition <= la.length - maxPosition)
        // {
        //   // Le plus gros numéro est le plus proche de la fin de l'array est le plus gros numéro est plus proche du millieu
        //   console.log('MAX more close to the end of the array than MIN lastelseif #1')
        // }
        // else
        // {
        //   console.log('entry2')
        // }
      }
    }
  }
}
      
sort();

