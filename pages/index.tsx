import HttpAdapter from 'http-adapters/base-adapter';
import useHttpAdapter from 'http-adapters/useHttpAdapter';
import React from 'react';

export default function Home() {
  const helloAdapter = useHttpAdapter<{ email: string; }>(new HttpAdapter('/api/hello', "POST"));

  const upload = async () => {
    const data = await helloAdapter.execute({ payload: { email: 'eechemane' } });
    console.log(data);
  };

  return (
    <main>
      <button onClick={upload}> upload </button>
    </main>
  );
}