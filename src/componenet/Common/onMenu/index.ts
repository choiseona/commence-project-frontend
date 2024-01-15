export const onMenu = () => {
    document.getElementById('menu-container')?.classList.toggle('invisible');
    document.getElementById('overlay')?.classList.toggle('opacity-0');
    document.getElementById('overlay')?.classList.toggle('opacity-100');
    document.getElementById('menu')?.classList.toggle('opacity-0');
    document.getElementById('menu')?.classList.toggle('opacity-100');
    document.getElementById('menu')?.classList.toggle('translate-x-full');
  };