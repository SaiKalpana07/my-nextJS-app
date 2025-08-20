"use server"

export async function getDetails(formData: FormData) {   
  const data = formData.get("data");
  console.log(data,'data');
}
