export type File = {
  type: 'file';
  name: string;
  modified: Date;
  size: number;
};

export type Folder = {
  type: 'folder';
  name: string;
  modified: Date;
  children: FileNode[];
};

// FileNode is a union type of File and Folder
export type FileNode = File | Folder;
