"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.basic = Template.bind({});
exports.basic.args = {
    label: "No Label",
    size: "normal",
    allCaps: false,
    color: 'primary'
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "No Label",
    size: "normal",
    allCaps: true,
    color: 'primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "No Label",
    size: "normal",
    allCaps: false,
    color: "secondary"
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "No Label",
    size: "normal",
    allCaps: false,
    color: "tertiary"
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: "No Label",
    size: "normal",
    allCaps: false,
    color: "tertiary",
    fontColor: "#5517ac"
};
