"use server";

const login = async (formData: FormData) => {
  const formDataRaw = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
};
