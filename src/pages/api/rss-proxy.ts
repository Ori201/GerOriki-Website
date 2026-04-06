import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ request }: APIContext) {
    const target = request.headers.get('x-target-url') || new URL(request.url).searchParams.get('url');

    if (!target) {
        return new Response("Missing target URL in headers or params", { status: 400 });
    }

    try {
        const res = await fetch(target, {
            headers: {
                'Accept-Language': 'he-IL'
            }
        });

        const data = await res.text();
        return new Response(data, {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control": "no-store",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (e) {
        console.error("Fetch Error:", e);
        return new Response("Internal Server Error", { status: 500 });
    }
}