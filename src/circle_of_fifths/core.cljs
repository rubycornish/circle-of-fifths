(ns circle-of-fifths.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; Utility

;;;; Maths

(defn parametric-x [x r a]
  "Calculate the x coord of a point on a circle"
  (+ x (* r (q/cos (q/radians a)))))

(defn parametric-y [y r a]
  "Calculate the y coord of a point on a circle"
  (+ y (* r (q/sin (q/radians a)))))


;;;; Strings

(def notes (cycle ["A" "Bb" "B" "C" "Db" "D" "Eb" "E" "F" "Gb" "G" "Ab"]))


;;;; Intervals

(defn interval [semitones note]
  "Returns a note a number of semitones away from the given note going up the scale"
  (first (drop semitones (drop-while #(not= note %) notes))))

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


;; GLOBALS

(def canvas-width 1600)
(def canvas-height 900)

(def percentage-of-canvas-height 0.9)   ; how much smaller should the circle-of-fifths be compared to canvas height
(def circle-diameter (* canvas-height percentage-of-canvas-height))
(def note-circle-diameter (* canvas-height 0.5))

(defn setup []
  "Sets everything up"
  (q/frame-rate 30)
  (q/color-mode :rgb)
  {:color 0})

(defn update-state [state]
  "Updates everything"
  {:color 0})


;; Drawing functions

(defn draw-arc [x y d beg end]
  "Draws an arc and two lines from x y"
  (let [r (/ d 2)]
    (q/arc x y d d (q/radians beg) (q/radians end))
    (q/line x y (parametric-x x r beg) (parametric-y y r beg))
    (q/line x y (parametric-x x r end) (parametric-y y r end))))

(defn draw-12-arcs [x y d]
  "Draws 12 arcs 30 degrees apart filling out a circle."
  (let [beg-angles (range 15 346 30)
        end-angles (range 45 376 30)]
    (q/fill 255 255 255)
    (q/stroke 0 0 0)
    (dorun (map (partial draw-arc x y d) beg-angles end-angles))))

(defn draw-note [x y r a n]
  "Draws a note on the circle"
  (let [x (parametric-x x r a)
        y (parametric-y y r a)]
    (q/with-translation [x y]
      (q/with-rotation [(q/radians (+ a 90))]
        (q/text n 0 0)))))

(defn draw-12-notes [x y d n]
  "Draws all 12 notes in the circle of fifths."
  (let [notes (take 12 (iterate fifth n))
        angles (range -90 271 30)
        r(/ d 2)]
    (q/fill 0 0 0)
    (q/text-font "sans-serif" 60)
    (q/text-align :center :center)
    (dorun (map (partial draw-note x y (- r 35)) angles notes))))

(defn draw-note-circle [x y d n]
  "Draws the circle and the notes"
  (q/stroke-weight 2)
  (draw-12-arcs x y d)
  (draw-12-notes x y d n))

(defn draw-state [state]
  "Draws everything"
  (q/background 240)
  (q/fill 100 100 100)
  (draw-note-circle (/ canvas-width 2) (/ canvas-height 2) note-circle-diameter "C"))


;; Main Function

(q/defsketch my
  :host "circle-of-fifths"
  :size [canvas-width canvas-height]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])


