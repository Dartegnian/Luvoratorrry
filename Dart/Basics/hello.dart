void main() {
  String toPrint = printHelloWorld("Dart language!");
  print(toPrint);
}

String printHelloWorld(String withExtraWord) {
  return "Hello world and hello ${withExtraWord}";
}
