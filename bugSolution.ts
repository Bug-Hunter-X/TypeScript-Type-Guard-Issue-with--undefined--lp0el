function printName(name: string | null | undefined): void {
  if (name !== undefined) {
    console.log(name.toUpperCase());
  }
}

printName(null); // Works correctly
printName(undefined); // Works correctly
printName("John Doe"); // Works correctly