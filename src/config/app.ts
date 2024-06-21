const loadConfig = () => {
  return {
    env: {
      type: process.env.NODE_ENV || "development",
    },
    api: {
      port: Number(process.env.API_PORT || 5001),
      path: process.env.API_URL || "http://localhost",
    },
    db: {
      url: process.env.DATABASE_URL,
      redisHost: process.env.REDIS_HOST,
      redisPort: process.env.REDIS_PORT,
    },
    cal: {
      signature: process.env.CAL_SIG_TOKEN,
      encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION_KEY,
      listOfUnmigratedApiKeys: process.env.LIST_OF_UNMIGRATED_API_KEYS,
    },
    stripe: {
      apiKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      licenseProductId: process.env.STRIPE_FIXED_PRODUCT_ID,
    },
    mail: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_FROM,
    },
  };
};

export default loadConfig;
