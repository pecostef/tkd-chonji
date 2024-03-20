import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import config from 'env';

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
        customDomain: {
          domainName: config.DOMAIN_NAME,
          isExternalDomain: true,
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              'site-cert',
              config.CERT_ARN
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
