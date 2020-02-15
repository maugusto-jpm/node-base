const environment = process.env.NODE_ENV || 'development';

module.exports = {
  host: process.env.DB_HOST || 'postgres',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || `app_${environment}`,
  dialect: process.env.DB_DIALECT || "postgres",
  logging: (environment == 'development' ? console.log : false),
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
};
