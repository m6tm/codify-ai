// The module 'vscode' contains the VS Code extensibility API

import { getCompletionsFromGemini } from './complation';

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codify-ai" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('codify-ai.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Codify AI!');
	});

	vscode.languages.registerCompletionItemProvider('javascript', {
		async provideCompletionItems(document, position, token, context) {
			// const completionItem = new vscode.CompletionItem('Hello World');
			// return [completionItem];
			let suggestions = [];
			// Utilisez l'API Gemini pour générer des suggestions d'autocomplétion
			let completions = await getCompletionsFromGemini(document, position);
			suggestions = completions.map(c => {
				let item = new vscode.CompletionItem(c.label);
				item.kind = vscode.CompletionItemKind.Snippet;
				item.insertText = c.insertText;
				return item;
			});
			return suggestions;
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
