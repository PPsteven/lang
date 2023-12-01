export let base_path = ""

export let api = import.meta.env.HOST_URL as string ?? ""

if (api === "/") {
    api = location.origin + base_path
}
if (api && api.endsWith("/")) {
    api = api.slice(0, -1)
}