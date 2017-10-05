(ns circle-of-fifths.app
  (:require [quil.core :as q :include-macros true]))

;; UTILITY

;;;; Screen

(def canvas-width 1600)
(def canvas-height 900)


;;;; Maths

(defn parametric-x [x r a]
  "Calculate the x coord of a point on a circle"
  (+ x (* r (q/cos (q/radians a)))))

(defn parametric-y [y r a]
  "Calculate the y coord of a point on a circle"
  (+ y (* r (q/sin (q/radians a)))))


;;;; Strings

(def chromatic-notes (cycle ["A" "Bb" "B" "C" "Db" "D" "Eb" "E" "F" "Gb" "G" "Ab"]))


;;;; Intervals

(defn interval [semitones note]
  "Returns a note a number of semitones away from the given note going up the scale"
  (first (drop semitones (drop-while #(not= note %) chromatic-notes))))

(defn maj-second [n]
  (interval 2 n))

(defn maj-third [n]
  (interval 4 n))

(defn fourth [n]
  (interval 5 n))

(defn fifth [n]
  (interval 7 n))

(defn octave [n]
  (interval 12 n))


;; SETUP

(defn setup []
  "Sets everything up"
  (q/frame-rate 30)
  (q/color-mode :rgb)
  {:tonic "C"
   :x-center-of-circle (/ canvas-width 2)
   :y-center-of-circle (/ canvas-height 2)
   :whole-circle-radius (/ (* canvas-height 0.9) 2)
   :note-circle-radius (/ (* canvas-height 0.5) 2)
   :major-scale-chords-radius (/ (* canvas-height 0.6) 2)})

;; UPDATE

(comment
  (defn check-mouse-click-location [x y whole-d note-d]
    (let [m-x (q/mouse-x)
          m-y (q/mouse-y)]
      (cond
        ()))))

(defn mouse-click []
  identity)


(defn update-state [state]
  "Updates everything"
  (let [{x :x-center-of-circle
         y :y-center-of-circle
         whole-r :whole-circle-radius
         note-r :note-circle-radius
         major-scale-chords-r :major-scale-chords-radius} state]
    state))


;; DRAW

(defn draw-arc [x y r beg-angle end-angle color]
  "Draws an arc and two lines from x y"
  (let [d (* 2 r)]
    (apply q/fill color)
    (q/arc x y d d (q/radians beg-angle) (q/radians end-angle))))

(defn draw-radius [x y r a]
  "Draws radius of circle"
  (q/line x y (parametric-x x r a) (parametric-y y r a)))

(defn draw-text [x y r a t]
  "Draws some text on the circle"
  (let [x (parametric-x x r a)
        y (parametric-y y r a)]
    (q/with-translation [x y]
      (q/with-rotation [(q/radians (+ a 90))]
        (q/text t 0 0)))))

(defn draw-n-arcs [x y r n colors]
  "Draws n arcs with given colors. Arcs start at the top of circle and offset by half the angle to make arc centered"
  (let [angle (/ 360 n)
        offset (/ angle 2)
        beg-angles (range (- -90 offset) 271 angle)
        end-angles (range (+ -90 offset) 271 angle)]
    (dorun (map (partial draw-arc x y r) beg-angles end-angles colors))))

(defn draw-n-radii [x y r n]
  "Draws n radii"
  (let [angle (/ 360 n)
        offset (/ angle 2)
        angles (range (- -90 offset) 271 angle)]
    (dorun (map (partial draw-radius x y r) angles))))

(defn draw-text-in-arcs [x y r text text-size text-offset]
  "Draws given text in arcs"
  (let [angle (/ 360 (count text))
        offset (/ angle 2)
        angles (range -90 271 angle)]
    (q/fill 0 0 0)
    (q/text-font "sans-serif" text-size)
    (q/text-align :center :center)
    (dorun (map (partial draw-text x y (- r text-offset)) angles text))))

(defn draw-major-scale-chords [x y r]
  "Draw the major chords for the key"
  (let [chords ["I" "V" "ii" "vi" "iii" "vii°" "" "" "" "" "" "IV"]
        colors [[153 255 204][153 255 204] ;MAJOR
                [100 175 255][100 175 255][100 175 255] ;MINOR
                [255 153 153]
                [250 250 250][250 250 250][250 250 250][250 250 250][250 250 250] ;BLANK
                [153 255 204]]] ;MAJOR AGAIN
    (draw-n-arcs x y r 12 colors)
    (draw-text-in-arcs x y r chords 30 20)))

(defn draw-circle-of-fifths [x y r tonic]
  "Draw circle of fifths"
  (let [notes (take 12 (iterate fifth tonic))]
    (q/stroke-weight 2)
    (draw-n-arcs x y r 12 (repeat 12 [250 250 250]))
    (draw-text-in-arcs x y r notes 60 35)))

(defn draw-state [state]
  "Draws everything"
  (let [{tonic :tonic
         x :x-center-of-circle
         y :y-center-of-circle
         whole-r :whole-circle-radius
         note-r :note-circle-radius
         major-scale-chords-r :major-scale-chords-radius} state]
    (q/background 240)
    (draw-major-scale-chords x y major-scale-chords-r)
    (draw-circle-of-fifths x y note-r tonic)
    (draw-n-radii x y whole-r 12)))

