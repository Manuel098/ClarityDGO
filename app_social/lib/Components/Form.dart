import 'package:flutter/material.dart';
import './InputFields.dart';

class FormContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return (new Container(
      margin: new EdgeInsets.symmetric(horizontal: 20.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          new Form(
              child: new Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              new InputFieldArea(
                hint: "Usuario",
                obscure: false,
                icon: Icons.person_pin,
              ),
              new InputFieldArea(
                hint: "Contraseña",
                obscure: true,
                icon: Icons.lock,
              ),
            ],
          )),
        ],
      ),
    ));
  }
}
