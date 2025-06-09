import React, { Suspense } from 'react';
import UpdatePromptClient from './UpdatePromptClient';

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptClient />
    </Suspense>
  );
}
