import { cookies } from "next/headers";
import CryptoJS from "crypto-js";

export const SECRET_KEY = process.env.COOKIE_SECRET_KEY || "default_secret_key";

export async function decodeToken() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("ecommerce-kit")?.value;

    if (token) {
      const decrypted = CryptoJS.AES.decrypt(token, SECRET_KEY).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decrypted);
    }

    return null;
  } catch (error) {
    return null;
  }
}
