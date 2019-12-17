import "dart:io";

void main() {
  stdout.writeln("Please type your name");
  String name = stdin.readLineSync();
  DateTime currentTime = new DateTime.now();
  print("Hello, user $name! The time is now ${currentTime}");
}
