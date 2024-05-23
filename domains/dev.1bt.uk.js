addSubDomain({
  description: 'A development environment for personal projects',
  domain: '1bt.uk', // root domain
  subdomain: 'dev', // subdomain name
  owner: {
    repo: 'https://github.com/shotoo999/free-domains', // URL to your project's repository
    email: 'shoto999@skiff.com', // your public email address
  },
  record: {
    NS: ['NS1.AFRAID.ORG', 'NS2.AFRAID.ORG', 'NS3.AFRAID.ORG', 'NS4.AFRAID.ORG'],
  },
  proxy: true, // Enable Cloudflare proxy
});
