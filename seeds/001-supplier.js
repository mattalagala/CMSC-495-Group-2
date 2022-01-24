exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('supplier').del()
    .then(function () {
      // Inserts seed entries
      return knex('supplier').insert([
        {supplier_id: 1, company_name: 'Fender', company_logo: 'https://assets.spotlight.fender.com/logos/fender-red-large.jpg', },
        // {supplier_id: 2, company_name: 'PRS', company_logo: 'https://cdn.shopify.com/s/files/1/0178/8399/products/PRSBlacksticker_1000x.jpg?v=1584116269',},
        // {supplier_id: 3, company_name: 'Ableton', company_logo: 'https://i.pcmag.com/imagery/reviews/026WYE4XN99dDtWflTxyi5l-9.fit_scale.size_1028x578.v_1569472898.jpg',},
        // {supplier_id: 4, company_name: 'Martin', company_logo: 'https://murphysguitars.com/wp-content/uploads/martin-logo.jpg',},
        // {supplier_id: 5, company_name: 'Taylor', company_logo: 'https://www.taylorguitars.com/sites/default/files/tg-logo-red-2x.jpg',},
        // {supplier_id: 6, company_name: 'Native Instruments', company_logo: 'https://searchlogovector.com/wp-content/uploads/2018/09/native-instruments-logo-vector.png',},
        // {supplier_id: 7, company_name: 'Orange', company_logo: 'https://i.pinimg.com/originals/e2/f8/b7/e2f8b77ec7ef8fb2380c21e02e653bd6.jpg',},
        // {supplier_id: 8, company_name: 'Vox', company_logo: 'https://cdn.shopify.com/s/files/1/0018/5149/0377/collections/vox-parts-collection_800x800.jpg?v=1551196131',},
        // {supplier_id: 9, company_name: 'Gibson', company_logo: 'https://i.pinimg.com/originals/1b/34/52/1b34521e90cc87679f1f3a672ccc9cbe.jpg',},
        // {supplier_id: 10, company_name: 'Akai Professional', company_logo: 'https://www.inmusicbrands.com/images/block_akai_over.png',},

      ]);
    });
};