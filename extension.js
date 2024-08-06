// Le module 'vscode' contient l'API d'extensibilité de VS Code

// import { getCompletionsFromGemini } from './completion';

// Importez le module et référencez-le avec l'alias vscode dans votre code ci-dessous
const vscode = require('vscode');

// Cette méthode est appelée lorsque votre extension est activée
// Votre extension est activée la toute première fois que la commande est exécutée

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Utilisez la console pour afficher des informations de diagnostic (console.log) et des erreurs (console.error)
	// Cette ligne de code ne sera exécutée qu'une seule fois lors de l'activation de votre extension
	console.log('Félicitations, votre extension "codify-ai" est maintenant active !');

	// La commande a été définie dans le fichier package.json
	// Maintenant, fournissez l'implémentation de la commande avec registerCommand
	// Le paramètre commandId doit correspondre au champ command dans package.json
	const disposables = [
		vscode.commands.registerCommand('codify-ai.completion', function () {
			// Le code que vous placez ici sera exécuté chaque fois que votre commande sera exécutée
	
			// Afficher une boîte de message à l'utilisateur
			vscode.window.showInformationMessage('Bonjour le monde depuis Codify AI !!!');
		})
	]

	// vscode.languages.registerCompletionItemProvider('javascript', {
	// 	async provideCompletionItems(document, position, token, context) {
	// 		// const completionItem = new vscode.CompletionItem('Hello World');
	// 		// return [completionItem];
	// 		let suggestions = [];
	// 		// Utilisez l'API Gemini pour générer des suggestions d'autocomplétion
	// 		let completions = await getCompletionsFromGemini(document, position);
	// 		suggestions = completions.map(c => {
	// 			let item = new vscode.CompletionItem(c.label);
	// 			item.kind = vscode.CompletionItemKind.Snippet;
	// 			item.insertText = c.insertText;
	// 			return item;
	// 		});
	// 		return suggestions;
	// 	}
	// });

	disposables.forEach(disposable => context.subscriptions.push(disposable));
}

// Cette méthode est appelée lorsque votre extension est désactivée
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
