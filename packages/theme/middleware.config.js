module.exports = {
  integrations: {
    prestashop: {
      location: '@vue-storefront/prestashop-api/server',
      configuration: {
        api: {
          url: 'http://120.77.213.116/rest/{endpoint}'
        }
      }
    }
  }
};
