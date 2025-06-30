const config = {
	isProd: process.env.NODE_ENV === "production",
	port: parseInt(process.env.PORT || "10000"),
	db: {
		dialect: "sqlite",
		storage: process.env.DB_STORAGE || "database.sqlite",
		logging: false,
	},
};

export default config;
