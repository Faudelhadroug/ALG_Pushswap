let la = [2, 8, 3, 66, 4];
let lb = [7, 9, 1];

const sa = () => {
  [key1, key2] = la
  if(!key1 || !key2) return;
  let copie = {...la, 0 : key2, 1 : key1}
  la = Object.values(copie);
  console.log(la);
}

const sb = () => {
  [key1, key2] = lb;
  if(!key1 || !key2) return;
  let copie = {...lb, 0 : key2, 1 : key1}
  lb = Object.values(copie);
  console.log(lb)
}

const sc = () => {
  sa(),
  sb()
}

const pa = () => {
  [key1] = lb
  if(!key1) return;
  la.unshift(key1);
  lb.splice(0, 1);
}

const pb = () => {
  [key1] = la
  if(!key1) return;
  lb.unshift(key1);
  la.splice(0, 1);
}

const ra = () => {
  la.unshift(la.pop());
}

const rb = () => {
  lb.unshift(lb.pop());
}

const rr = () => {
  ra();
  rb();
}

const rra = () => {
  la.push(la.shift());
}

const rrb = () => {
  lb.push(lb.shift());
}

const rrr = () => {
  console.log(la);
  rra();
  rrb();
  console.log(la);
}

sa();
rrr();
rrr();
sa();
rrr();