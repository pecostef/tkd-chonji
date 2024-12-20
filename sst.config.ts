import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import config, { envKeys } from 'deployment.config';

export default {
  config(_input) {
    return {
      name: 'chon-ji-website',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, 'site', {
        environment: {
          [envKeys.destinationEmail]: config.destinationEmail as string,
          [envKeys.fromEmail]: config.fromEmail as string,
          [envKeys.senderEmail]: config.senderEmail as string,
          [envKeys.senderEmailPassword]: config.senderEmailPassword as string,
        },
        customDomain: {
          domainName: config.domainName as string,
          isExternalDomain: true,
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              'site-cert',
              config.certArn as string
            ),
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
