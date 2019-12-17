void main() {
  String mikuNumberToInt = "39";
  int mikuNumber = int.parse(mikuNumberToInt);
  assert(mikuNumber == 39);

  String mikuBirthDay = "9.31";
  double mikuBirthDayAsDsouble = double.parse(mikuBirthDay);
  print(mikuBirthDayAsDsouble);

  String mikuText = "Miku Miku! Magic $mikuNumber on ${mikuBirthDayAsDsouble.toStringAsFixed(3)}";
  print(mikuText);
}
