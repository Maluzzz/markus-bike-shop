"use client";
import { FormProvider, useForm } from "react-hook-form";
import BikeBuilder from "./(sections)/BikeBuilder";
import Receipt from "./(sections)/Receipt";

export default function Home() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="!bg-white flex justify-center items-center md:h-lvh">
        <div className="flex rounded-xl border border-black/10 m-8 shadow-lg max-w-screen-xl w-full  md:flex-row flex-col">
   
          <div className="md:flex-1 bg-custom-gradient rounded-xl md:rounded-r-none md:rounded-l-xl p-8">
            <h1 className="text-3xl tracking-tighter font-semibold text-white">
              Markus&apos; Bike Shop{" "}
            </h1>
            <span className="text-white caption font-semibold italic">
              Let&apos;s build the bike of your dreams. ✨
            </span>
            <Receipt />
          </div>
          <div className="md:flex-[2_2_0%] bg-white rounded-xl p-8">
            <h2 className="text-2xl tracking-tighter text-neutral-400 font-semibold">
              Bike Configurator ⚙️{" "}
            </h2>
            <BikeBuilder />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
