exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments("id"); // primary key that auto increments
    tbl.string("name").notNullable(); // name column with string type and is required
    tbl.integer("cohort_id"); // cohort_id column that references the primary key id from the cohorts table
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
