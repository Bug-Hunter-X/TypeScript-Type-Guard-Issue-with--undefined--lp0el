function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}

printName(null); // This is fine
printName(undefined); // This causes a compile-time error