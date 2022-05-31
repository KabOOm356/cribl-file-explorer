import styles from './styles.less';
import grid from '@src/components/FolderExplorer/grid.less';

const Header = () => {
  const el = document.createElement('div');
  el.setAttribute('data-testid', 'header');
  el.classList.add(styles.container, grid.header, grid.row);

  return el;
};

export default Header;
