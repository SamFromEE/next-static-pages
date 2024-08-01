import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter()
  return (
    <>
      <p>Root - static pages</p>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={() => router.push(`/users/${name}`)} >Go</button>
    </>
  );
}
