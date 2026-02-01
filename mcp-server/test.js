
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
    const transport = new StdioClientTransport({
        command: "node",
        args: ["index.js"],
    });

    const client = new Client(
        {
            name: "test-client",
            version: "1.0.0",
        },
        {
            capabilities: {},
        }
    );

    await client.connect(transport);

    console.log("Connected to MCP server");

    // List tools
    const tools = await client.listTools();
    console.log("Tools:", tools);

    // Call list_products
    console.log("Calling list_products...");
    const productsResult = await client.callTool({
        name: "list_products",
        arguments: {},
    });
    const products = JSON.parse(productsResult.content[0].text);
    console.log(`Found ${products.length} products`);
    console.log("First product:", products[0]);

    // Call update_product (Dry run style - just one field to test)
    // We'll update the first product's price temporarily
    const firstProduct = products[0];
    if (firstProduct) {
        console.log(`Updating product ${firstProduct.id}...`);
        await client.callTool({
            name: "update_product",
            arguments: {
                id: firstProduct.id,
                price: "$999.99",
                api_key: "secret123"
            }
        });
        console.log("Update complete.");
    }

    await client.close();
}

main().catch(console.error);
