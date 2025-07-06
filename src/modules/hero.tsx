export default function Hero() {
  return (
    <section
      className="h-screen relative min-h-[80rem] max-h-[100rem]"
      id="home"
    >
      <div className="absolute top-1/2 left-1/2 -translate-1/2 max-w-[90rem] w-11/12">
        <h1 className="uppercase font-bold text-center text-4xl">
          Hey, my name is Ricky Ho
        </h1>
        <div className="max-w-[80rem] mt-12 mx-auto">
          <p className="text-center w-full leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems{" "}
          </p>
        </div>
        <div className="mt-12 text-center">
          <a
            href="./#projects"
            className="px-12 py-5 text-xs font-bold uppercase rounded-lg border-2 h-full inline-block leading-0.5 transform duration-200 hover:-translate-y-0.5 active:-translate-y-0.25 shadow
            "
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
}
