import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/header";
import { api } from "~/utils/api";
import { r3f } from "~/helpers/global";
import { GradientTexture } from "@react-three/drei";
import { useToast } from "~/components/ui/use-toast";
import { useEffect } from "react";

export default function Home() {
  const { toast } = useToast();

  return (
    <>
      <Head>
        <title>Thread</title>
        <meta name="description" content="Take unorganized notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen">
        <div className="relative  h-full w-full">
          <Header />

          <r3f.In>
            <mesh
              onPointerMissed={(e) => {
                console.log("mesh here", e.target);
              }}
            >
              <planeGeometry />
              <meshBasicMaterial>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </meshBasicMaterial>
            </mesh>
          </r3f.In>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
