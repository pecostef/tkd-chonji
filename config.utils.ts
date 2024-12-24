import { AppConfig } from './app.config';

export class ConfigLoader<T> {
  private config: T;

  constructor(envKeys: Record<keyof T, string>) {
    this.config = this.loadConfig(envKeys);
  }

  private loadConfig(envKeys: Record<keyof T, string>): T {
    const config = {} as T;
    console.log(process.env);
    for (const key of Object.keys(envKeys)) {
      config[key as keyof T] = process.env[
        envKeys[key as keyof T]
      ] as T[keyof T];
    }

    return config;
  }

  public getSanitizedConfig(): T {
    for (const [key, value] of Object.entries(
      this.config as Record<string, unknown>
    )) {
      if (value === undefined) {
        throw new Error(`Missing required environment variable: ${key}`);
      }
    }
    return this.config;
  }
}

export function castSmtpPortOrDefault(config: AppConfig) {
  try {
    config.smtpPort = parseInt(config.smtpPort as unknown as string, 10);
  } catch (error) {
    config.smtpPort = 587;
  }
}
