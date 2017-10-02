(ns circle-of-fifths.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


;; Helper Functions

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
   :major-chords-radius (/ (* canvas-height 0.6) 2)})

;; Updating and interaction

(comment
  (defn check-mouse-click-location [x y whole-d note-d]
    (let [m-x (q/mouse-x)
          m-y (q/mouse-y)]
      (cond
        ()))))


(defn update-state [state]
  "Updates everything"
  (let [{x :x-center-of-circle
         y :y-center-of-circle
         whole-r :whole-circle-radius
         note-r :note-circle-radius
         major-chords-r :major-chords-radius} state]
    state))


;; Drawing functions

(defn draw-arc [x y r beg-angle end-angle]
  "Draws an arc and two lines from x y"
  (let [d (* 2 r)]
    (q/fill 255 255 255)
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

(defn draw-12-arcs [x y r]
  "Draws 12 arcs 30 degrees apart filling out a circle."
  (let [beg-angles (range 15 346 30)
        end-angles (range 45 376 30)]
    (dorun (map (partial draw-arc x y r) beg-angles end-angles))))

(defn draw-12-radii [x y r]
  "Draws 12 radiuses 30 degrees apart"
  (let [angles (range 15 346 30)]
    (dorun (map (partial draw-radius x y r) angles))))

(defn draw-12-notes [x y r n]
  "Draws all 12 notes in the circle of fifths."
  (let [notes (take 12 (iterate fifth n))
        angles (range -90 271 30)]
    (q/fill 0 0 0)
    (q/text-font "sans-serif" 60)
    (q/text-align :center :center)
    (dorun (map (partial draw-text x y (- r 35)) angles notes)))) ;; Magic number 35 is offset to make number look good

(defn draw-major-chords [x y r]
  "Draw the major chords for the key"
  (let [chords ["IV" "I" "V" "ii" "vi" "iii" "vii°"]
        angles (range -120 91 30)]
    (q/fill 0 0 0)
    (q/text-font "sans-serif" 30)
    (q/text-align :center :center)
    (dorun (map (partial draw-text x y (- r 20)) angles chords)))) ;; Magic number 35 is offset to make number look good

(defn draw-major-chods-circle [x y r]
  "Draws the circle and the major chords"
  (q/stroke-weight 2)
  (draw-12-arcs x y r)
  (draw-major-chords x y r))

(defn draw-note-circle [x y r n]
  "Draws the circle and the notes"
  (q/stroke-weight 2)
  (draw-12-arcs x y r)
  (draw-12-notes x y r n))

(defn draw-state [state]
  "Draws everything"
  (let [{tonic :tonic
         x :x-center-of-circle
         y :y-center-of-circle
         whole-r :whole-circle-radius
         note-r :note-circle-radius
         major-chords-r :major-chords-radius} state]
    (q/background 240)
    (draw-12-arcs x y whole-r)
    (draw-major-chods-circle x y major-chords-r)
    (draw-note-circle x y note-r tonic)
    (draw-12-radii x y whole-r)))


;; Main Function

(q/defsketch my
  :host "circle-of-fifths"
  :size [canvas-width canvas-height]
  :setup setup
  :update update-state
  :draw draw-state
  :settings (q/smooth)
  :middleware [m/fun-mode])




