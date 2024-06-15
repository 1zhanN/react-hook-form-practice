 "use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    githubUrl: z.string().url({ message: "Invalid URL" }),
    experience: z
      .number()
      .min(1, { message: "Must be between 1 and 10" })
      .max(10, { message: "Must be between 1 and 10" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center mt-4 sm:block sm:justify-start">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <input
            {...register("email")}
            type="text"
            className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              <span className="font-medium">Error: </span>{" "}
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="my-5">
          <input
            {...register("githubUrl")}
            type="text"
            className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="GitHub URL"
          />
          {errors.githubUrl && (
            <p className="mt-2 text-sm text-red-500">
              <span className="font-medium">Error: </span>{" "}
              {errors.githubUrl.message}
            </p>
          )}
        </div>
        <div className="my-5">
          <input
            {...register("experience", { valueAsNumber: true })}
            type="number"
            className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Years of Experience (1-10)"
          />
          {errors.experience && (
            <p className="mt-2 text-sm text-red-500">
              <span className="font-medium">Error: </span>{" "}
              {errors.experience.message}
            </p>
          )}
        </div>
        <div className="my-5">
          <input
            {...register("password")}
            type="password"
            className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              <span className="font-medium">Error: </span>{" "}
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="my-5">
          <input
            {...register("confirmPassword")}
            type="password"
            className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500">
              <span className="font-medium">Error: </span>{" "}
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-blue-600 active:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default MyForm;
