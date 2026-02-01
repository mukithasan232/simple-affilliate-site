#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { getProjectData, updateProduct } from "./project_utils.js";

const ADMIN_API_KEY = process.env.ADMIN_KEY || "secret123";

const server = new Server(
    {
        name: "product-management-mcp",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// Tool Definitions
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "list_products",
                description: "List all products found in the project",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "update_product",
                description: "Update a product's details",
                inputSchema: {
                    type: "object",
                    properties: {
                        id: { type: "string", description: "The product translation key (e.g., product_title_1)" },
                        title_en: { type: "string", description: "English title" },
                        title_bn: { type: "string", description: "Bengali title" },
                        price: { type: "string", description: "Current price (e.g. $49.99)" },
                        old_price: { type: "string", description: "Old price (optional)" },
                        image: { type: "string", description: "Relative path to image" },
                        link: { type: "string", description: "URL for the product" },
                        api_key: { type: "string", description: "Admin API Key" },
                    },
                    required: ["id", "api_key"],
                },
            },
        ],
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
        if (request.params.name === "list_products") {
            const { products } = await getProjectData();
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(products, null, 2),
                    },
                ],
            };
        }

        if (request.params.name === "update_product") {
            const args = request.params.arguments;
            const { api_key } = args;

            if (api_key !== ADMIN_API_KEY) {
                throw new Error("Invalid API Key");
            }

            // Remove api_key from args before passing to updateProduct
            const updateData = { ...args };
            delete updateData.api_key;

            await updateProduct(updateData);

            return {
                content: [
                    {
                        type: "text",
                        text: `Updated product ${args.id}`,
                    },
                ],
            };
        }

        throw new Error("Tool not found");
    } catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: `Error: ${error.message}`,
                },
            ],
            isError: true,
        };
    }
});

const transport = new StdioServerTransport();
await server.connect(transport);
