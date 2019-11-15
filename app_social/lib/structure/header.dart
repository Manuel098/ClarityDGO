import 'package:flutter/material.dart';

class Header extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SearchBarr(),
    );
  }
}

class SearchBarr extends StatefulWidget{
  @override
  _MySearchBarrState createState() => _MySearchBarrState();
}

class _MySearchBarrState extends State<SearchBarr>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
    );
  }
}