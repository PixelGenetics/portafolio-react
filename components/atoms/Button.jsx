import React, { useEffect, useState } from 'react';
import img from '../../assets/moon-svgrepo-com.svg';
import img2 from '../../assets/sun-svgrepo-com.svg';

const Button = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.querySelector('button')?.classList.add('dark');
      document.querySelector('#title_borge')?.classList.add('dark');
      document.querySelector('#title_kevin')?.classList.add('dark');
      document.querySelector('#body-inner')?.classList.add('dark');
      document.querySelector('#body')?.classList.add('dark');
      document.querySelector('#body-1')?.classList.add('dark');
      document.querySelector('#body-2')?.classList.add('dark');
      document.querySelector('#footer')?.classList.add('dark');
      document.querySelector('#project-resumen')?.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.querySelector('button')?.classList.remove('dark');
      document.querySelector('#title_borge')?.classList.remove('dark');
      document.querySelector('#title_kevin')?.classList.remove('dark');
      document.querySelector('#body')?.classList.remove('dark');
      document.querySelector('#body-inner')?.classList.remove('dark');
      document.querySelector('#body-1')?.classList.remove('dark');
      document.querySelector('#body-2')?.classList.remove('dark');
      document.querySelector('#footer')?.classList.remove('dark');
      document.querySelector('#project-resumen')?.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <button onClick={handleDarkMode}>
        {darkMode ? <img src={img2} alt="" /> : <img src={img} alt="" />}
      </button>
    </div>
  );
};

export default Button;