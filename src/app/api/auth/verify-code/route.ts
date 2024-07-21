import isValidEmail from "@/src/app/lib/utils/isValidEmail";
import { cookies } from "next/headers";
import api from "@/src/app/lib/api/Api";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email || !body.code) {
      return new Response(
        JSON.stringify({ error: "Email is required or code" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    if (!isValidEmail(body.email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await api("server").auth().verifyToken(body);

    if (!response || !response.data) {
      return new Response(
        JSON.stringify({ error: "Ошибка на стороне сервера" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    cookies().set("access_token", response.data.access_token, {
      httpOnly: true,
    });

    return new Response(JSON.stringify({ message: "ok" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
