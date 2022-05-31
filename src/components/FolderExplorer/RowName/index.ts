import { FileNode } from '@src/types/fileNode';
import grid from '@src/components/FolderExplorer/grid.less';
import styles from './styles.less';

const RowName = ({ name, type }: FileNode) => {
  const el = document.createElement('div');
  el.classList.add(grid.name);
  if (type === 'folder') {
    el.classList.add(styles.folder);
  }
  el.setAttribute('data-testid', 'row-name');
  el.setAttribute('data-folder-row', 'true');
  el.textContent = name;

  return el;
};

export default RowName;
