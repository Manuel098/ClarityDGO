import 'package:flutter/material.dart';

class Tick extends StatelessWidget {
  final DecorationImage image;
  Tick({this.image});
  @override
  Widget build(BuildContext context) {
    return (new Container(
      margin: const EdgeInsets.only(top: 90.0),
      width: 150.0,
      height: 150.0,
      alignment: Alignment.bottomCenter,
      decoration: new BoxDecoration(
        image: image,
      ),
    ));
  }
}
