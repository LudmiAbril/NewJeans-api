import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "New Jeans API",
            version: "1.0.0",
            description: "API to get information about the kpop group.",
        },
    },
    apis: ["src/routes/*.js", "src/swagger/*.yaml"]
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, {
        customSiteTitle: "New Jeans API",
        customfavIcon: "https://play-lh.googleusercontent.com/AxUz-xtc2rBLRG3YCDVhU0sEan6lWoxjLN606jTX6F4ENzIKGEYHIluCPNiHTHOCCXc=w240-h480-rw"
    }));
    console.log("Swagger docs available at /docs");
};
