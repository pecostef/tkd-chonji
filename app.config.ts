import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);
console.log(projectDir);
import { castSmtpPortOrDefault, ConfigLoader } from './config.utils';

const envKeys = {
  senderEmail: 'SENDER_EMAIL',
  senderEmailPassword: 'SENDER_EMAIL_PASSWORD',
  destinationEmail: 'DESTINATION_EMAIL',
  fromEmail: 'FROM_EMAIL',
  smtpServer: 'SMTP_SERVER',
  smtpPort: 'SMTP_PORT',
};

export interface AppConfig {
  senderEmail: string;
  senderEmailPassword: string;
  destinationEmail: string;
  fromEmail: string;
  smtpServer: string;
  smtpPort: number;
}

const configLoader = new ConfigLoader<AppConfig>(envKeys);
const config = configLoader.getSanitizedConfig();
castSmtpPortOrDefault(config);
export default config;
