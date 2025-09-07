import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "New Jeans API",
            version: "1.0.0",
            description: "API providing information about the K-pop group New Jeans, including members, songs, albums, and music videos.",
        },
        contact: {
            name: "Ludmila Pereyra",
            url: "https://github.com/LudmiAbril",
        },
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
        }
    },
    apis: ["src/routes/*.js", "src/swagger/*.yaml"]
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, {
        customSiteTitle: "New Jeans API",
        customfavIcon: "/images/favicon.ico",
        customCss: ".swagger-ui .topbar { display: none }",
    }));
    console.log("Swagger docs available at /docs");
};
