import React, { Suspense } from 'react';
import UpdatePromptClient from './UpdatePromptClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptClient />
    </Suspense>
  );
}
