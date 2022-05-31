import grid from '@src/components/FolderExplorer/grid.less';

const HeaderName = () => {
  const el = document.createElement('div');
  el.classList.add(grid.header, grid.name);
  el.setAttribute('data-testid', 'header-name');
  el.textContent = 'Name';

  return el;
};

export default HeaderName;
