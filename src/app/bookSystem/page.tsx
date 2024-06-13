"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BookSystem() {

  const router = useRouter()

  useEffect(() => {
    router.push('/bookSystem/login');
  }, [router]);

  return (<>
    <div>Welcom to fake book borrow system</div>
  </>)
}