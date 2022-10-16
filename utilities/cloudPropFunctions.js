const rand = (min, max) => {
   return (Math.floor(Math.random() * (max - min + 1) + min) / 100);
}

const randInteger = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const randTop = (min, max) => {
   const randTop = String(randInteger(min, max));
   return randTop;
}

const randDelay = (min, max) => {
   const delay = String(randInteger(min, max));
   return delay;
}

const randDuration = (min, max) => {
   const delay = String(randInteger(min, max));
   return delay;
}

const randColor = (min, max) => {
   const randColor = String(randInteger(min, max));
   return randColor;
}

const randScale = (min, max) => {
   const randScale = String(rand(min, max));
   return randScale;
}

export const cloudPropFunctions = {
   randTop: randTop, 
   randDelay: randDelay, 
   randDuration: randDuration, 
   randColor: randColor,
   randScale: randScale
}