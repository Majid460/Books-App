function longest<Type extends {length: number}>(a: Type, b: Type) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

type unidentified = String | number;
function a(p: Bear) {
  console.log(p.name);
}
interface animal {
  name: String;
}
interface Bear extends animal {
  honey: boolean;
}

a({name: 'Taddy', honey: true});
export {longest, a};
