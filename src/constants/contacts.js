import path from 'node:path';

const pathToWork = process.swd();
export const PATH_DB = path.join(pathToWork, 'src', 'db', 'db.json');

