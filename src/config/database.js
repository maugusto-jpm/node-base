module.exports = {
  host: process.env.DB_HOST || 'postgres',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'app_development',
  dialect: process.env.DB_DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};