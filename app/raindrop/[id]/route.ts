import sdk from "@/lib/raindrop"

export async function GET(request: Request) {
    const response = await sdk.raindrops.listRaindrops(32688179)
    return new Response(JSON.stringify(response.data), {})
}