module.exports = {
	isProd: process.env.NODE_ENV === "production",
	port: parseInt(process.env.PORT || "3000"),
	databaseUrl: process.env.DATABASE_URL || "sqlite:database.sqlite",
};
