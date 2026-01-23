export const statusBox = document.getElementById("status") as HTMLDivElement;

export function setStatus(text: string, color: string): void {
  statusBox.textContent = text;
  statusBox.style.background = color;
  statusBox.style.color = "white";
  statusBox.style.padding = "10px 20px";
  statusBox.style.marginBottom = "20px";
  statusBox.style.borderRadius = "6px";
  statusBox.style.fontSize = "20px";
  statusBox.style.textAlign = "center";
}
