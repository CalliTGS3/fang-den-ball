# Fang den Ball!

## ~avatar avatar @unplugged

Programmiere ein Spiel auf Deinem @boardname@.
Du lernst in dieser Anleitung, wie Dein @boardname@ Tastendrücke auswertet, wie Du Schleifen programmieren kannst und wie Du 
die Spielefunktionen von Makecode für @boardname@ benutzen kannst.

Das Spiel:  

Der @boardname@ spielt Dir auf der 5x5 LED Matrix einen Ball (Punkt oder "Sprite" genannt) zu, den Du mit einem Fänger (ein zweiter Sprite) 
fangen sollst. Den Fänger kannst Du mit den Tasten A und B bewegen. 
Mit jedem gefangenen Ball erhöhst Du Deinen Punktestand (Score). Wenn Du den Ball nicht fängst, verliert Dein Fänger ein "Leben".
Wenn die "Leben" des Fängers aufgebraucht sind, ist das Spiel zu Ende und der @boardname@ zeigt Dir Deinen Score an.
Wenn Dein Fänger einen bestimmten Punktestand erreicht hat, wird der Ball schneller!


## Schritt 1

Erzeuge zunächst die Variablen für den ``||Variables:Ball||``, den ``||Variables:Fänger||``, die ``||Variables:BallFlugPause||`` zur Angabe der 
Ballgeschwindigkeit und die Anzahl der Punkte in einem Geschwindigkeits-Level: ``||Variables:PunkteImLevel||``.


## Schritt 2 @fullscreen

Initialisiere die Variablen ``||Variables:BallFlugPause||`` und ``||Variables:PunkteImLevel||`` mit folgenden Werten:
(700 ms Zeit für die Bewegung des Balls von einem Punkt zum anderen; kürzere Zeit resultiert in schnellerem Ball!)

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
```


## Schritt 3 @fullscreen

Initialisiere ``||Games:setze Spielstand auf||`` und ``||Games:setze Anzahl Leben||`` mit folgenden Werten:

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
```


## Schritt 4 @fullscreen

Lege den Sprite für den Fänger in der Mitte der untersten Zeile der 5x5 LED Matrix an:
(Die Koordinaten der 5x5 LED Matrix sind von 0 bis 4 numeriert und beginnen in x Richtung links und in y Richtung oben)

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
Fänger = game.createSprite(2, 4)
```
