exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Ronny Alvarado", cohort_id: 1 },
        { name: "Zeus", cohort_id: 2 },
        { name: "Athena", cohort_id: 3 }
      ]);
    });
};
