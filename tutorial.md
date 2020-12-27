# Fang den Ball!

## ~avatar avatar @unplugged

Programmiere ein Spiel auf Deinem @boardname@.
Du lernst in dieser Anleitung, wie Dein @boardname@ Tastendrücke auswertet, wie Du Schleifen programmieren kannst und wie Du 
die Spielefunktionen von Makecode für @boardname@ benutzen kannst.

Das Spiel:  

Der @boardname@ spielt Dir auf der 5x5 LED Matrix einen Ball (Punkt oder "Sprite" genannt) zu, den Du mit einem Fänger (ein zweiter Sprite) 
fangen sollst. Den Fänger kannst Du mit den Tasten A und B bewegen. 
Mit jedem gefangenen Ball erhöhst Du Deinen Punktestand (Score). Wenn Du den Ball nicht fängst, verliert Dein Fänger ein "Leben".
Wenn Deine "Leben" aufgebraucht sind, ist das Spiel zu Ende und der @boardname@ zeigt Dir Deinen Score an.
Wenn Dein Fänger einen bestimmten Punktestand erreicht hat, wird der Ball schneller!


## Schritt 1

Erzeuge zunächst die Variablen für den Ball, den Fänger, die Ballgeschwindigkeit und die Anzahl der Punkte in einem Geschwindigkeits-Level.


## Schritt 2 @fullscreen

Initialisiere die Variablen mit folgenden Werten:

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
```
