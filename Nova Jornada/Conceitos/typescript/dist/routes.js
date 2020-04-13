"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(request, response) {
    return response.json({ message: "Olá" });
}
exports.hello = hello;
