import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-prose mx-auto px-4" id="home">
      <h1 className="uppercase font-bold text-center text-4xl">
        Hey, my name is Ricky Ho
      </h1>
      <div className="mt-12 mx-auto">
        <p className="leading-[1.6]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente solutions for
          complex problems{" "}
        </p>
        <div className="mt-12 text-center">
          <Link
            href="./projects"
            className="px-12 py-5 text-xs font-bold uppercase rounded-lg border-2 h-full inline-block leading-0.5 transform duration-200 hover:-translate-y-0.5 active:-translate-y-0.25 shadow
            "
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
