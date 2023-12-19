"use client";
import Image from "next/image";
import { useState } from "react";
import "./page.css";

export default function Home() {
  const initialUuids = [
    "2e4ed8aa-2c6a-4014-9fe4-269eaf9ebec1",

    "835f75fb-7523-4f5d-a97a-e09357b5f16e",

    "5e29275c-5e69-4ae0-bea7-536b26153976",

    "3178220d-6e5e-428e-a8ae-3fdde70462c5",

    "ea649817-f946-411f-b5ce-cc1666dc7494",

    "2d3e0050-e535-4669-9e7b-05189d42953a",

    "86c4d848-eb41-497f-b34d-ae7ee73bfcae",

    "fb731090-e501-4bbe-900e-bfa772f7eff8",

    "e3c31a0c-b022-4fbc-a507-16592fd57904",

    "7bf028b7-fad7-4049-b79d-2e2776a47314",
  ];

  const [uuids, setUuids] = useState(initialUuids);

  const removeUuid = (uuid: string) => {
    setUuids((prevUuids) => prevUuids.filter((id) => id !== uuid));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        {uuids.map((uuid) => (
          <div key={uuid} className="uuid-container">
            <textarea defaultValue={uuid} />
            <button onClick={() => removeUuid(uuid)}>x</button>
          </div>
        ))}

        {/* <style jsx>{`
          
        `}</style> */}
      </div>
    </main>
  );
}

export const config = {
  runtime: "client",
};
