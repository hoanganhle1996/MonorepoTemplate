"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const TestComponent = () => {
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "TestComponent")));
};
exports.TestComponent = TestComponent;
