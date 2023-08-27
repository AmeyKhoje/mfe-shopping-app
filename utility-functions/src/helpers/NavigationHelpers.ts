export const navigateToRemote = (path: string) => {
  if (path.length) {
    window.location.href = path;
  }
}