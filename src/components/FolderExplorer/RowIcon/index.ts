import { FileNode } from '@src/types/fileNode';
import grid from '@src/components/FolderExplorer/grid.less';

const RowIcon = ({ type }: FileNode) => {
  const el = document.createElement('div');
  el.classList.add(grid.icon);
  el.setAttribute('data-testid', 'row-icon');
  el.setAttribute('data-folder-row', 'true');
  const iconType = type === 'folder' ? 'fa-folder-open' : 'fa-file';
  el.innerHTML = `<i class="fa ${iconType} fa-lg" aria-hidden="true"></i>`;

  return el;
};

export default RowIcon;
