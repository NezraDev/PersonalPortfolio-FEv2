export const projectImage = (path: string) => `/${path.replace(/^\/+/, '')}`;
export const projectThumbnail = (path: string, size: number) => projectImage(path).replace('/projects/', '/projects/optimized/').replace(/\.png$/, `-${size}.webp`);
export const projectTitle = (title: string) => title.replace('Monitoring and Monitoring', 'Forecasting and Monitoring').trim();
export const isProjectSource = (url?: string) => Boolean(url && /^https:\/\/github\.com\/[^/?]+\/[^/?]+/.test(url));
