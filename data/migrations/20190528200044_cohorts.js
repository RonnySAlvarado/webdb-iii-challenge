exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", tbl => {
    tbl.increments("id"); // primary key that auto increments
    tbl.string("name").notNullable(); // name column with string type and is required
    tbl.timestamps(true, true); // create_at and updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};
