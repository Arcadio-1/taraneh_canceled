import React from "react";
import { prisma } from "@/lib/db/prisma";
import FormSubmit from "@/components/util/FormSubmit/FormSubmit";

const page = async () => {
  const sendData = async (data: FormData) => {
    "use server";
    try {
      console.log(data);
      const id = Math.round(Math.random() * 1000000).toString();
      const name = data.get("name")?.toString();
      const family = data.get("family")?.toString();
      const age = Number(data.get("age")) || 0;
      console.log(id, name, family, age);
      if (!name || !family || !age) {
        throw new Error("fields are requred");
      }
      const req = await prisma.testing.create({
        data: { name, family, age },
      });
      console.log(req);
    } catch (error) {
      console.log(error || "fuck");
    }
    // const client = await getClient("test");
    // const db = client.db();
    // const req = db.collection("users").insertOne({
    //   name: "rkdo",
    //   family: "alexander",
    //   age: 24,
    // });
    // const res = await req;
  };
  console.log("request");
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <form
        action={sendData}
        className="bg-gray-100 bg-opacity-10 p-3 rounded-lg"
      >
        <h1 className="text-gray-100 capitalize mb-2">fill up this form</h1>
        <div className="grid gap-2">
          <div className="text-gray-100 flex gap-2 pl-2">
            <label className="flex-shrink min-w-[4rem] capitalize">name:</label>
            <input
              required
              name="name"
              type="text"
              className="rounded-md bg-opacity-50 bg-white text-gray-700 w-full px-2 focus:outline-transparent focus:border-transparent"
            />
          </div>
          <div className="text-gray-100 flex gap-2 pl-2">
            <label className="flex-shrink min-w-[4rem] capitalize">
              family:
            </label>
            <input
              required
              name="family"
              type="text"
              className="rounded-md bg-opacity-50 bg-white text-gray-700 w-full px-2"
            />
          </div>
          <div className="text-gray-100 flex gap-2 pl-2">
            <label className="flex-shrink min-w-[4rem] capitalize">age:</label>
            <input
              required
              name="age"
              type="mumber"
              className="rounded-md bg-opacity-50 bg-white text-gray-700 w-full px-2"
            />
          </div>
        </div>
        <div className="mt-5 flex gap-2 justify-end">
          <button
            type="submit"
            className="bg-red-400 bg-opacity-70 text-gray-100 px-3 py-[0.1rem] rounded-[5px]"
          >
            Cancel
          </button>
          <FormSubmit>Add</FormSubmit>
        </div>
      </form>
    </div>
  );
};

export default page;
