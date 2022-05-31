import { FileNode } from '@src/types/fileNode';
import NavItemName from './NavItemName';
import NavItemExpand from './NavItemExpand';
import styles from './styles.less';
import NavItemChildren from './NavItemChildren';

const NavItem = (node: FileNode) => {
  const root = document.createElement('div');
  root.classList.add(styles.container);
  root.setAttribute('data-testid', 'nav-item');

  if (node.type !== 'folder') {
    return null;
  }

  const name = NavItemName(node);
  name.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const event = new CustomEvent('openFolder', { detail: node });
    document.dispatchEvent(event);
  });

  const subfolders = node.children.filter((child) => child.type === 'folder');
  if (subfolders.length) {
    const expand = NavItemExpand();
    const children = NavItemChildren(node);

    expand.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      expand.classList.toggle('open');
      children.classList.toggle('open');
    });

    const row = document.createElement('div');
    row.classList.add(styles.row);
    row.appendChild(expand);
    row.appendChild(name);

    root.appendChild(row);
    root.appendChild(children);
  } else {
    root.appendChild(name);
  }

  return root;
};

export default NavItem;
