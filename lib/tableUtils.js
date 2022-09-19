  function references(table, tableName, notNullable = true, columnName = '') {
    const definition = table
      .integer(`${columnName || tableName}_id`)
      .unsigned()
      .references(`${tableName}_id`)
      .inTable(tableName)
      .onDelete('cascade');
  
    if (notNullable) {
      definition.notNullable();
    }
    return definition;
  }
  
  module.exports = {
    references,
  };