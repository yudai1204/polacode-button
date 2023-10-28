import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const myButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  myButton.text = "Polacode 📸";
  myButton.command = "polacodeButton.activate";
  myButton.show();

  let disposable = vscode.commands.registerCommand(
    "polacodeButton.activate",
    () => {
      vscode.commands.executeCommand("polacode.activate").then(
        () => {
          console.log("Polacode is active");
        },
        (err) => {
          vscode.window.showErrorMessage(
            err || "Failed to execute the command."
          );
        }
      );
    }
  );

  context.subscriptions.push(disposable);
}
