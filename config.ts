interface DB {
  PGHOST: string | undefined;
  PGUSER: string | undefined;
  PGDATABASE: string | undefined;
  PGPASSWORD: string | undefined;
  PGPORT: number | undefined;
}

// .env returns string but ClientConfig.port from pg package requires number
// Below code segment changes PGPORT from string to number
let pgPort = undefined;
if (process.env.PGPORT) {
  pgPort = parseInt(process.env.PGPORT);
}

const DB: DB = {
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: pgPort,
};
const SESSION_SECRET = process.env.SESSION_SECRET;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export { DB, SESSION_SECRET, STRIPE_SECRET_KEY };
