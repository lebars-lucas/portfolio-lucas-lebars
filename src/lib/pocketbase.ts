export const PB_URL = import.meta.env.MODE === 'production'
  ? 'https://portfolio.lucas-lebars.fr'
  : 'http://127.0.0.1:8090';
  
export const api = {
  collection: (name: string) => `${PB_URL}/api/collections/${name}`,
  records: (name: string) => `${PB_URL}/api/collections/${name}/records`,
  recordById: (name: string, id: string) => `${PB_URL}/api/collections/${name}/records/${id}`,
  file: (collectionId: string, recordId: string, filename: string) =>
    `${PB_URL}/api/files/${collectionId}/${recordId}/${filename}`,
};
