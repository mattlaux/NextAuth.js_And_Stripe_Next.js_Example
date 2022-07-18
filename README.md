# NextAuth.js and Stripe Next.js Example

Typescript Next.js web application integrated with NextAuth.js and Stripe detailed in [this guide](https://mattlaux/posts/settingUpNextAuth).

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Inspiration](#inspiration)

## Introduction

As part of my learning process, I have been developing a Saas tool called [RetailAlgoTrader](https://retailalgotrader.com).

A primary goal of mine is to understand how to develop a full-stack, production-ready web application. As a result, it is necessary
to implement an authentication and authorization flow as well as on online payments system.

This repository includes the source code for the two part series hosted on [my portfolio site](https://mattlaux/).

## Technologies

- Next.js 12.2.2
- NextAuth.js 4.10.0
- Stripe 9.13.0
- PostgreSQL 14
- Prisma 4.0.0

## Getting Started

Before you can run this code you will need to set up a PostgreSQL database, a Stripe account, and a NextAuth.js provider account.

The setup process is detailed in [this guide](https://mattlaux/posts/settingUpNextAuth).

After setting up the necessary accounts, you need to install the necessary dependencies:

```
npm install
```

Next, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [My 2 part guide series on integrating NextAuth.js and Stripe with Next.js](https://mattlaux/posts/settingUpNextAuth)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Stripe Documentation](https://stripe.com/docs/api?lang=node)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)

## Inspiration

The following two guides were very helpful in creating this code.

- [Andrew Jones Guide on Adding Users and Paid Subscriptions to Next.js](https://dev.to/ajones_codes/how-to-add-user-accounts-and-paid-subscriptions-to-your-nextjs-website-585e)
- [Vercel's Guide on Next.js, Typescript, and Stripe](https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe)
