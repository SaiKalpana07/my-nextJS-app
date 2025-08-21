"use server"

export async function getDetails(formData: FormData) {   
  console.log('data')
  const data = formData.get("data");
  console.log(data,'data');
}
