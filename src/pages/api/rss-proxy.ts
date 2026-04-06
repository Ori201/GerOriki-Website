import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ request }: APIContext) {
    const target = request.headers.get('x-target-url') || new URL(request.url).searchParams.get('url');

    if (!target) {
        return new Response("Missing target URL", { status: 400 });
    }

    try {
        const res = await fetch(target, {
            headers: { 'Accept-Language': 'he-IL' }
        });

        const contentType = res.headers.get('Content-Type') || 'application/xml';
        const data = await res.text();

        return new Response(data, {
            status: res.status,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "no-store",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (e) {
        return new Response(`Proxy Error: ${e instanceof Error ? e.message : 'Unknown error'}`, { 
            status: 500,
            headers: { "Content-Type": "text/plain" }
        });
    }
}