import algoliasearch from 'algoliasearch/reactnative';

const searchKey = 'd4224c404f92f671a1ac5552d6df07a0';
const client = algoliasearch('Y42OPKYVOC', searchKey);
const idx = client.initIndex('prod_PRODUCTS');

const search = (page, category, query) => {
  return new Promise((resolve, reject) => {
    const filters = category ? `parentCategory: "${category}"` : '';
    idx.setSettings({
      paginationLimitedTo: 2000,
      attributesForFaceting: ['parentCategory'],
      searchableAttributes: [
        'title',
        'category',
        'parentCategory'
      ]
    }, () => {
      idx.search(query, {
        attributesToRetrieve: ['category', 'images', 'parentCategory', 'price', 'productCode', 'title'],
        page: page || 0,
        facets: 'parentCategory',
        filters,
        hitsPerPage: 100
      }, (err, content) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(content);
      });
    });
  });
};

export default {
  search
};
