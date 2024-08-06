
import vscode from "vscode";

/**
 * 
 * @param {vscode.TextDocument} document 
 * @param {vscode.Position} position 
 * @returns 
 */
export async function getCompletionsFromGemini(document, position) {
	const currentWord = document.getText(new vscode.Range(position.with(undefined, 0), position));
	const completions = await fetchCompletionsFromGemini(currentWord);
	return completions;
}