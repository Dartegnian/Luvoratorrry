void main() {
  String toPrint = printHelloWorld("Dart language!");
  print(toPrint);
}

String printHelloWorld(String extraWords) {
  return "Hello world and hello $extraWords";
}
