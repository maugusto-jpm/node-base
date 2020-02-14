module.exports = {
  dialect: 'postgres',
  host: 'postgres',
  username: 'postgres',
  password: 'postgres',
  database: 'app_development',
  operatorsAliases: false,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  }
};