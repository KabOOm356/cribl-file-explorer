import grid from '@src/components/FolderExplorer/grid.less';

const HeaderModified = () => {
  const el = document.createElement('div');
  el.classList.add(grid.header, grid.modified);
  el.setAttribute('data-testid', 'header-modified');
  el.textContent = 'Date Modified';

  return el;
};

export default HeaderModified;
