module.exports = {
    async headers() {
        return [
            {
                source: "/api/socket",
                headers: [
                    { key: "Cache-control", value: "no-store" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, 
                ]
            }
        ]
    }
}