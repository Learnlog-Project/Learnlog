import sdk from "@/lib/raindrop"

export async function GET(request: Request) {
    const response = await sdk.collections.list()
    return new Response(JSON.stringify(response.data), {})
}