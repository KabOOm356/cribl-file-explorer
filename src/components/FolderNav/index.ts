import { FileNode } from '@src/types/fileNode';
import styles from './styles.less';
import NavItem from './NavItem';

const FolderNav = (root: FileNode) => {
  const el = document.createElement('nav');
  el.classList.add(styles.container);
  el.setAttribute('data-testid', 'folder-nav');

  if (root.type !== 'folder') {
    return null;
  }

  const navItem = NavItem(root);
  if (navItem) {
    el.appendChild(navItem);
  }

  return el;
};

export default FolderNav;
