import { BadRequest } from "./Exceptions";

export async function handleErrors<T = {}>(
  fetch: Promise<Response>
): Promise<T> {
  try {
    const res = await fetch;

    if (!res.ok) {
      const error = await res.json();
      if (error?.statusCode) {
        if(error.statusCode === 422){
          throw error;
        }

        if (error.statusCode === 403 || error.statusCode === 401) {
          throw error;
        } else {
          throw new BadRequest(error?.message);
        }
      } else if (error?.code || error?.message || error?.userMessage) {
        if(error.status === 422){
          throw {
            code: error.status,
            data: error.response
          };
        }
          throw new BadRequest(error?.message || error?.userMessage);
      } else {
        throw new Error(`Request filed with code: ${res.status}`);
      }
    }

    const data = await res.json();

    return data as T;
  } catch (error) {
    throw error;
  }
}