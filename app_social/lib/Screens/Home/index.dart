import 'package:flutter/cupertino.dart';

class HomeScreen extends StatefulWidget{
  const HomeScreen({Key key}) : super(key: key);
  @override
  HomeScreenState createState() => new HomeScreenState();
}

class HomeScreenState extends State<HomeScreen>{
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          padding: EdgeInsets.all(0),
        ),
        SizedBox(
          width: 18,
          child: Container(
          ),
        ),
      ],
    );
  }
}