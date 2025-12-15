/// <reference path="./.sst/platform/config.d.ts" />

import config, { envKeys } from './deployment.config';

export default $config({
  app(input: any) {
    return {
      name: 'chon-ji-website',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const site = new sst.aws.Nextjs('Site', {
      environment: {
        [envKeys.destinationEmail]: config.destinationEmail as string,
        [envKeys.fromEmail]: config.fromEmail as string,
        [envKeys.senderEmail]: config.senderEmail as string,
        [envKeys.senderEmailPassword]: config.senderEmailPassword as string,
      },
      domain: config.domainName ? {
        name: config.domainName as string,
        dns: false,
        cert: config.certArn as string,
      } : undefined,
    });

    return {
      url: site.url,
    };
  },
});
