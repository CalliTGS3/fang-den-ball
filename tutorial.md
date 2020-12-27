# Fang den Ball!

## ~avatar avatar @unplugged

Programmiere ein Spiel auf Deinem @boardname@.
Du lernst in dieser Anleitung, wie Dein @boardname@ Tastendrücke auswertet, wie Du Bedingungen und Schleifen programmierst und wie Du 
die Spielefunktionen von Makecode für @boardname@ benutzen kannst.

Das Spiel:  

Der @boardname@ spielt Dir auf der 5x5 LED Matrix einen Ball (Punkt oder "Sprite" genannt) zu, den Du mit einem Fänger (ein zweiter Sprite) 
fangen sollst. Den Fänger kannst Du mit den Tasten A und B bewegen. 

Mit jedem gefangenen Ball erhöhst Du Deinen Punktestand (Score). Wenn Du den Ball nicht fängst, verliert Dein Fänger ein "Leben".

Wenn die "Leben" des Fängers aufgebraucht sind, ist das Spiel zu Ende und der @boardname@ zeigt Dir Deinen Score an.
Das nächste Spiel kannst Du starten, indem Du die Tasten A und B gleichzeitig drückst.

Wenn Dein Fänger einen bestimmten Punktestand erreicht hat, wird der Ball schneller!


## Schritt 1

Erzeuge zunächst die Variablen für den ``||Variables:Ball||``, den ``||Variables:Fänger||``, die ``||Variables:BallFlugPause||`` zur Angabe der 
Ballgeschwindigkeit und die Anzahl der Punkte in einem Geschwindigkeits-Level: ``||Variables:PunkteImLevel||``.


## Schritt 2 @fullscreen

Initialisiere die Variablen ``||Variables:BallFlugPause||`` und ``||Variables:PunkteImLevel||`` mit folgenden Werten:
(700 ms Zeit für die Bewegung des Balls von einer Zeile der 5x5 LED Matrix zum anderen; kürzere Zeit resultiert in schnellerem Ball!)

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
```


## Schritt 3 @fullscreen

Initialisiere ``||Game:setze Spielstand auf||`` mit 0 und ``||Game:setze Anzahl Leben||``  mit 10 im Block "Spiel".

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
```


## Schritt 4 @fullscreen

Lege den Sprite für den Fänger in der Mitte der untersten Zeile (x=2, y=4) der 5x5 LED Matrix mit dem Block
``||Game:erzeuge Sprite an Position x: y:||`` an.
(Die Koordinaten der 5x5 LED Matrix sind von 0 bis 4 numeriert und beginnen in x Richtung links und in y Richtung oben)

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
Fänger = game.createSprite(2, 4)
```


## Schritt 5 @fullscreen

Erzeuge eine Endlos-Schleife für den Spielablauf mit ``||Loops:während wahr mache||``.
Mit der Angabe "wahr" läuft die Schleife endlos, d.h. bis zum Ausschalten des @boardname@.
In dieser Schleife befindet sich dann der gesamte Programmcode für eine Ballbewegung von oben nach unten und die Auswertung,
ob der Fänger den Ball getroffen hat, mit der Zählung der Leben und der erreichten Punkte.

```blocks
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
Fänger = game.createSprite(2, 4)
while (true) {
}
```


## Schritt 6 @fullscreen

In diesem Schritt sorgen wir zunächst für die Erzeugung des Balles an einer zufälligen Position in der oberen Zeile der 5x5 LED Matrix.
Dazu benutzen wir wieder den Block ``||Game:erzeuge Sprite an Position x: y:||``, aber setzen x nicht auf einen festen Wert, sondern 
lassen den @boardname@ einen zufälligen Wert zwischen 0 und 4 ausrechnen (unsere 5x5 Matrix kann einen Punkt auf einen Wert zwischen 0 und 4 setzen).
Dazu benutzen wir den Block ``||Math:wähle eine zufällige Zahl von bis||``

Die ersten Programm - Schritte haben wir in den Hinweisen ab jetzt weggelassen wegen der besseren Übersichtlichkeit.
Entferne sie nicht aus Deinem Programm!

```blocks
while (true) {
    Ball = game.createSprite(randint(0, 4), 0)
    }
```


## Schritt 7 @fullscreen

Der Ball muss jetzt automatisch von der obersten Zeile (0) bis zur untersten Zeile (4) der 5x5 LED Matrix bewegt werden, 
und zwar so langsam, daß wir als Spieler die Gelegenheit haben, die Bewegung zu erkennen.   
Dazu verwenden wir die Schleife ``||Loops:-mal wiederholen||`` und setzen den Zähler auf 4, weil wir ja den Ball um 4 Zeilen bewegen wollen.
Wir müssen eine Pause mit ``||Basic:pausiere (ms)||`` einfügen, ansonsten könnten wir gar nicht mitspielen, weil der @boardname@ viel schneller rechnen 
kann als wir zuschauen und reagieren können. Damit wir die Bewegung des Balls während des Spiels verändern können, verwenden wir für die Pause die Variable
``||Variables:BallFlugPause||``. Die Y - Koordinate (d.h. die Zeile) des Balles verändern wir in der Schleife mit dem Block
``||Game:ändere y um:||``. 


```blocks
while (true) {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.Y, 1)
    }
    }
```


## Schritt 8 @fullscreen

In diesem Schritt prüfen wir, ob der Fänger - Sprite mit dem Ball - Sprite Kontakt hat. Dazu verwenden wir einen Bedingungs - Block
``||Logic:wenn dann ansonsten||`` und benutzen darin den Block ``||Game:berührt||``. 
Wenn der Fänger den Ball "berührt" hat, erhöhen wir den Punktestand mit dem Block
``||Game:ändere Spielstand um||``, andernfalls verringern wir die "Leben" des Fängers um 1 mit dem Block ``||Game:Leben entfernen||``.

```blocks
while (true) {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.Y, 1)
    }
    if (Fänger.isTouching(Ball)) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
```


## Schritt 9 @fullscreen

Den Sprite des Balles müssen wir im vorletzten Schritt noch aus der Anzeige entfernen mit dem Block ``||Game:lösche||``.
In der nächsten Runde der Endlos - Schleife entsteht ja wieder ein neuer Ball - Sprite.

```blocks
while (true) {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.Y, 1)
    }
    if (Fänger.isTouching(Ball)) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    Ball.delete()
```


## Schritt 10 @fullscreen

Als letzter Schritt in der Endlos - Schleife prüfen wir den Spielstand und erhöhen die Geschwindigkeit des Balles, damit das Spiel
spannend bleibt! Dazu testen wir den ``||Game:Spielstand||``, ob er eine durch ``||Variables:PunkteImLevel||`` teilbare Zahl ohne Rest ist, 
d.h. ein Vielfaches von ``||Variables:PunkteImLevel||``. Wenn das der Fall ist, verringern wir die ``||Variables:BallFlugPause||`` um 50 ms,
d.h. der Ball fliegt schneller.  

```blocks
while (true) {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.Y, 1)
    }
    if (Fänger.isTouching(Ball)) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    Ball.delete()
    if (game.score() > 0 && game.score() % PunkteImLevel == 0) {
        BallFlugPause = BallFlugPause - 50
    }
```


## Schritt 11 @fullscreen

In diesem Schritt programmieren wir die Steuerung des Fängers mit den Tasten A und B des @boardname@.
Dazu benutzen wir den Block ``||input:wenn Knopf A gedrückt||`` aus dem Bereich ``||input:Eingaben||``
Beim Drücken der Taste A rufen wir den Block ``||Game:ändere x um ||`` mit dem Wert -1 für den Fänger Sprite auf.
Gleiches machen wir für für Taste B mit und ``||input:wenn Knopf B gedrückt||`` und dem Wert 1. 
Mit -1 ändern wir die Position des Fängers um eins nach links und mit +1 um eins nach rechts. 

Die anderen Programm - Schritte haben wir in den Hinweisen ab jetzt weggelassen wegen der besseren Übersichtlichkeit.
Entferne sie nicht aus Deinem Programm!

```blocks
input.onButtonPressed(Button.A, function () {
    Fänger.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Fänger.change(LedSpriteProperty.X, 1)
})
```


## Schritt 12

Schau Dir im @boardname@ Simulator Dein Programm an, Du kannst dort auch mit der Maus die beiden Tasten A und B bedienen.


## Schritt 13

Schliesse Deinen @boardname@ mit einem USB Kabel an und drücke auf ``|Herunterladen|``. Speichere Dein Programm auf dem Laufwerk **@drivename@**. 
Damit wird Dein Programm zum @boardname@ übertragen.


## Schritt 14
Nach dem Fertigstellen:
Im Hauptmenü von makecode findest Du den Menüpunkt ``|Teilen|``. 
Klicke darauf, Du siehst anschließend ein Fenster in der Mitte mit dem Namen des Projektes. 
Klicke auf die Schaltfläche ``|Projekt veröffentlichen|`` und dann auf ``|Link|`` kopieren. 
Danach kannst Du diesen Link in der Schulcloud als Lösung zu der Aufgabe eintragen.


## Schritt 15

Gut gemacht! Du hast ein Spiel für den @boardname@ geschrieben.
Verlasse diese Anleitung, indem Du auf ``|Fertigstellen|`` klickst. 
