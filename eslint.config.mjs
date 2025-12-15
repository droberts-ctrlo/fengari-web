import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.js"], languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				...globals.worker
			}
		}
	},
	{
		files: ["webpack.conf.js"],
		languageOptions: {
			sourceType: "script",
			globals: globals.node
		}
	},
	{
		ignores: ["dist"]
	},
	{ 
		rules: {
			indent: ["error", "tab", { SwitchCase: 1 }],
			"linebreak-style": ["error", "unix"],
			"no-console": "off",
			"no-unused-vars": ["error", { args: "none" }],
			"semi": ["error", "always"]
		}
	}
]);
