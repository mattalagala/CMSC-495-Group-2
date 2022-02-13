exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('divisions').del()
        .then(function () {
            // Seed division entries
            return knex('divisions').insert([
                { id: 1, name: 'AFC North' },
                { id: 2, name: 'AFC East' },
                { id: 3, name: 'AFC South' },
                { id: 4, name: 'AFC West' },
                { id: 5, name: 'NFC North' },
                { id: 6, name: 'NFC East' },
                { id: 7, name: 'NFC South' },
                { id: 8, name: 'NFC West' }
            ]);
        });
};