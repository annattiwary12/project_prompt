'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

export default function UpdatePromptClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  useEffect(() => {
    if (!promptId) return;
    const fetchPrompt = async () => {
      try {
        const res = await fetch(`/api/prompt/${promptId}`);
        if (!res.ok) throw new Error('Failed to fetch prompt');
        const data = await res.json();
        setPost({ prompt: data.prompt, tag: data.tag });
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrompt();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) {
      alert('Prompt Id not found');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: post.prompt, tag: post.tag }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to update prompt');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
}
