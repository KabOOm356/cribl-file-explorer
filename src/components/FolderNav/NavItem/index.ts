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

  if (node.children.length) {
    const expand = NavItemExpand();
    expand.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      root.classList.toggle('open');
    });

    const children = NavItemChildren(node);

    root.appendChild(expand);
    root.appendChild(name);
    root.appendChild(children);
  } else {
    root.appendChild(name);
  }

  return root;
};

export default NavItem;
