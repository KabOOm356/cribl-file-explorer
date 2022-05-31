import grid from '@src/components/FolderExplorer/grid.less';

const HeaderSize = () => {
  const el = document.createElement('div');
  el.classList.add(grid.header, grid.size);
  el.setAttribute('data-testid', 'header-size');
  el.textContent = 'File Size';

  return el;
};

export default HeaderSize;
