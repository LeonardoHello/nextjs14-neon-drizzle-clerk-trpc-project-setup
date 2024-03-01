# To run project locally
1. Clone the repository: **`https://github.com/LeonardoHello/nextjs14-neon-drizzle-clerk-trpc-project-setup.git`**
2. Install dependencies: **`npm install`**
3. Add env variables inside .env.local file: 
```
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
4. Generate SQL migration: **`npm run generate`**
5. Push newly generated schema directly to the database: **`npm run push`**
6. Run the development server: **`npm run dev`**

follow the documentation for syncing clerk data to your backend with webhooks: https://clerk.com/docs/integrations/webhooks/sync-data#sync-clerk-data-to-your-backend-with-webhooks
