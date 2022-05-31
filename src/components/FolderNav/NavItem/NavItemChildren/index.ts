import { Folder } from '@src/types/fileNode';
import { isPresent } from '@src/util/predicate';
import NavItem from '@src/components/FolderNav/NavItem';
import styles from './styles.less';

const NavItemChildren = (folder: Folder) => {
  const el = document.createElement('div');
  el.classList.add(styles.children);
  el.setAttribute('data-testid', 'nav-item-children');

  folder.children
    .map((child) => NavItem(child))
    .filter(isPresent)
    .forEach((child) => el.appendChild(child));

  return el;
};

export default NavItemChildren;
