// Copy from https://github.com/amannn/next-intl/blob/main/examples/example-next-13/src/app/not-found.tsx
'use client';

import Error from 'next/error';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="zh">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
