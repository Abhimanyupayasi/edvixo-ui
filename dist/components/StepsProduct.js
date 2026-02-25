"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StepsProduct({ data, baseUrl = "", title, }) {
    var _a;
    const steps = (_a = data === null || data === void 0 ? void 0 : data.filter((step) => step.isActive)) === null || _a === void 0 ? void 0 : _a.sort((a, b) => { var _a, _b; return ((_a = a.sequenceNo) !== null && _a !== void 0 ? _a : 0) - ((_b = b.sequenceNo) !== null && _b !== void 0 ? _b : 0); });
    return (_jsx("section", { className: "py-24 bg-white w-full", children: _jsxs("div", { className: "w-full px-6", children: [_jsx("div", { className: "text-center mb-20", children: _jsx("h2", { className: "text-4xl text-gray-900 font-extrabold ", children: title || `Getting Started in ${steps === null || steps === void 0 ? void 0 : steps.length} Steps` }) }), _jsx("div", { className: "flex flex-col lg:flex-row justify-between items-start gap-16 relative", children: steps === null || steps === void 0 ? void 0 : steps.map((step, index) => {
                        var _a;
                        return (_jsxs("div", { className: "flex flex-col items-center text-center flex-1 relative", children: [_jsx("div", { className: "mt-6 w-16 h-16 border border-gray-500 rounded-full flex items-center justify-center", children: _jsx("img", { src: step.id
                                            ? `${baseUrl}/${step.id}`
                                            : step.img, alt: step.altImageText, title: step.altImageText, className: "w-7 h-7 object-contain" }) }), _jsx("h3", { className: "mt-6 font-semibold text-lg text-slate-900 max-w-xs", children: step.title }), _jsx("p", { className: "mt-4 text-md text-slate-500 max-w-xs", children: step.description }), index !== steps.length - 1 && (_jsxs("svg", { className: "hidden lg:block absolute top-5 -right-14", width: "70", height: "40", viewBox: "0 0 70 40", fill: "#070707", children: [_jsx("path", { d: "M5 35 Q35 5 65 20", stroke: "#070707", strokeWidth: "2", fill: "none" }), _jsx("polygon", { points: "60,15 68,20 60,25", fill: "#070707" })] }))] }, (_a = step.id) !== null && _a !== void 0 ? _a : index));
                    }) })] }) }));
}
//# sourceMappingURL=StepsProduct.js.map