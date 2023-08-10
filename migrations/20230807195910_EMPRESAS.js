/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.hasTable("candidato").then(function(exist){

        if(exist){

            return knex.schema.createTable("candidato", function(table){
                table.increments("id_persona").primary()
                table.string("nombre_candidato").notNullable()
                table.string("apellido_candidato").notNullable()
                table.integer("telefono_candidato")
                table.string("correo_candidato")
                table.integer("habilidad_candidato")

            })
        }
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("candidato").then(function(exist){

        if (exist){

            return knex.schema.dropTable("candidato")
        }
    })
};
