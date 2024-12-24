import { AppConfig } from './app.config';
import { castSmtpPortOrDefault, ConfigLoader } from './config.utils';

export const envKeys = {
  certArn: 'CERT_ARN',
  domainName: 'DOMAIN_NAME',
  senderEmail: 'SENDER_EMAIL',
  senderEmailPassword: 'SENDER_EMAIL_PASSWORD',
  destinationEmail: 'DESTINATION_EMAIL',
  fromEmail: 'FROM_EMAIL',
  smtpServer: 'SMTP_SERVER',
  smtpPort: 'SMTP_PORT',
};

interface DeploymentConfig extends AppConfig {
  certArn: string;
  domainName: string;
}

const configLoader = new ConfigLoader<DeploymentConfig>(envKeys);
const config = configLoader.getSanitizedConfig();
castSmtpPortOrDefault(config);
export default config;
