exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { id: 1, name: "WebPT4" },
        { id: 2, name: "WebPT5" },
        { id: 3, name: "WebPT6" }
      ]);
    });
};
