const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */

const nextConfig = phase => {
  const configObj = {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    images: {
      domains: [
        'www.downloadclipart.net',
        's3-alpha-sig.figma.com',
        'www.asus.com',
        'www.cyberpowersystem.co.uk',
      ],
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER)
    configObj.env = {
      nimadir:
        "Shiki shiki ba ba, baba shikishiki, shiki shiki baba, Buni baribiram bizadan boshqa hech kim ko'rmidi",
    };
  else
    configObj.env = {
      nimadir:
        'red well fried meat: qozon kabob, UPSS, OBBOOOOOOO! saytga ketib qoldimi?',
    };

  return configObj;
};

module.exports = nextConfig;
