interface ENV {
  CERT_ARN: string | undefined;
  DOMAIN_NAME: string | undefined;
}

interface Config {
  CERT_ARN: string;
  DOMAIN_NAME: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    CERT_ARN: process.env.CERT_ARN,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
  };
};

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const _config = getConfig();

const config = getSanitizedConfig(_config);

export default config;
