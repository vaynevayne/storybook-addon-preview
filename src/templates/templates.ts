import { CodeSandboxTemplate } from "../types";


function joinStrs(strs: string[]) {
    return `[${strs.map(str => `"${str}"`).join(", ")}]`;
}
export const DEFAULT_REACT_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "react",
    files: {
        "src/App.tsx": previews["React"][0],
        "src/styles.css": previews["CSS"][0],
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;
export const DEFAULT_VANILLA_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "vanilla",
    files: {
        "index.html": {
            template: "html",
            html: previews["HTML"],
            cssFiles: ["src/styles.css"],
            jsFiles: ["src/index.ts"],
        },
        "src/styles.css": previews["CSS"][0],
        "src/index.ts": previews["Vanilla"][0],
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;

export const DEFAULT_ANGULAR_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "angular",
    files: {
        "src/app/app.component.css": previews["CSS"][0],
        "src/app/app.component.html": previews["Angular"][0],
        "src/app/app.component.ts": previews["Angular"][1],
        "src/app/app.module.ts": previews["Angular"][2],
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;
export const DEFAULT_VUE_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "vue",
    files: {
        "src/App.vue":  previews["Vue"].join("\\n"),
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;
export const DEFAULT_SVELTE_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "svelte",
    files: {
        "App.svelte": previews["Svelte"].join("\\n"),
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;
export const DEFAULT_LIT_CODESANDBOX = (dependencies: string[]) => new Function(`
var previews = arguments[0];
return {
    framework: "lit",
    files: {
        "src/index.ts": previews["Lit"].join("\\n"),
        "src/index.css": previews["CSS"] ? previews["CSS"].join("\\n") : "",
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;

