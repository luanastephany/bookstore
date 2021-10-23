import { useEffect, useState } from 'react';

function Icon({ name, ...props }) {
  const [Comp, setComp] = useState(null);

  const lib = name?.substr(0, 2).toLowerCase();

  useEffect(() => {
    try {
      import(`../../node_modules/react-icons/${lib}/index.js`).then((mod) => {
        if (mod && mod[name]) {
          setComp(mod[name](props));
        }
      });
    } catch (e) {
      console.error(`Could not load icon ${name}`);
    }
  }, [name]);

  return Comp;
}

export default Icon;
