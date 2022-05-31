import styles from './styles.less';

const NavItemExpand = () => {
  const el = document.createElement('div');
  el.classList.add(styles.expand);
  el.setAttribute('data-testid', 'nav-item-expand');
  el.innerHTML = `<i class="fa fa-caret-right fa-lg" aria-hidden="true"></i>`;

  return el;
};

export default NavItemExpand;
