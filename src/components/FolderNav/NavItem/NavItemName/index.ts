import { FileNode } from '@src/types/fileNode';
import styles from './styles.less';

const NavItemName = (node: FileNode) => {
  const el = document.createElement('a');
  el.classList.add(styles.name);
  el.setAttribute('data-testid', 'nav-item-name');
  el.innerHTML = `
    <i class="fa fa-folder-open fa-lg" aria-hidden="true"></i>
    <span>${node.name}</span>
  `;

  return el;
};

export default NavItemName;
