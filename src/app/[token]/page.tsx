'use client'

import { useParams } from "next/navigation";
import CallPage from "../components/CallPage";




export default function page() {
   
    const { token }: { token: string } = useParams()

  return <CallPage initialToken={token} />;
}